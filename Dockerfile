# Get dependencies with npm install
FROM node:24.11-alpine AS dependencies
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy package.json first to cache dependency installs
COPY package.json ./
RUN rm -rf node_modules && npm install --omit=dev --no-package-lock

# Rebuild the source code only when needed
FROM node:24.11-alpine AS builder
WORKDIR /app

# Properly set Node.js heap size environment variable
ENV NODE_OPTIONS="--max-old-space-size=5120"

COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
RUN npm run build --prod

# Production image, copy all the files and run next
FROM node:24.11-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/public ./public
# Copy config.json for runtime configuration (can be overridden via volume mount)
COPY --from=builder /app/config.json ./config.json

USER nextjs
EXPOSE 3000

CMD ["sh", "-c", "set -a && . /app/secrets/secrets.env && set +a && npm start"]