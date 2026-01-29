import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="w-full max-w-xl rounded-2xl bg-white p-10 text-center shadow-sm dark:bg-zinc-900">
        <h1 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50">
          Simple Addition App
        </h1>
        <p className="mt-3 text-base text-zinc-600 dark:text-zinc-300">
          Head to the addition form and add two numbers.
        </p>
        <div className="mt-8">
          <Link
            className="inline-flex h-12 items-center justify-center rounded-full bg-black px-6 text-base font-medium text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            href="/addition"
          >
            Go to Addition
          </Link>
        </div>
      </main>
    </div>
  );
}
