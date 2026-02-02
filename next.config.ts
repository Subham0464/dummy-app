import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },

  // Repo B name: dummy-iac
  basePath: "/dummy-iac",
  assetPrefix: "/dummy-iac",
};

export default nextConfig;