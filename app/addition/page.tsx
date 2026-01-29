"use client";

import { useState } from "react";

export default function AdditionPage() {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [sum, setSum] = useState<number | null>(null);

  const handleAdd = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const firstValue = Number(first);
    const secondValue = Number(second);
    const nextSum =
      Number.isNaN(firstValue) || Number.isNaN(secondValue)
        ? null
        : firstValue + secondValue;
    setSum(nextSum);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="w-full max-w-xl rounded-2xl bg-white p-10 shadow-sm dark:bg-zinc-900">
        <h1 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50">
          Addition
        </h1>
        <p className="mt-3 text-base text-zinc-600 dark:text-zinc-300">
          Enter two numbers and click add.
        </p>

        <form className="mt-8 space-y-4" onSubmit={handleAdd}>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-200">
            First number
            <input
              className="mt-2 w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-zinc-900 shadow-sm outline-none focus:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100"
              type="number"
              inputMode="decimal"
              value={first}
              onChange={(event) => setFirst(event.target.value)}
              placeholder="e.g. 12"
            />
          </label>

          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-200">
            Second number
            <input
              className="mt-2 w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-zinc-900 shadow-sm outline-none focus:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100"
              type="number"
              inputMode="decimal"
              value={second}
              onChange={(event) => setSecond(event.target.value)}
              placeholder="e.g. 8"
            />
          </label>

          <button
            type="submit"
            className="inline-flex h-11 items-center justify-center rounded-full bg-black px-6 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
          >
            Add
          </button>
        </form>

        <div className="mt-6 rounded-xl border border-dashed border-zinc-200 p-4 text-center text-lg font-semibold text-zinc-900 dark:border-zinc-700 dark:text-zinc-50">
          {sum === null ? "Sum will appear here" : `Sum: ${sum}`}
        </div>
      </main>
    </div>
  );
}
