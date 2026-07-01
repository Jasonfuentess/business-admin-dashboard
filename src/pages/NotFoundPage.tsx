// src/pages/NotFoundPage.tsx
import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
        404
      </h1>

      <p className="mt-2 text-slate-600 dark:text-slate-400">
        The page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="mt-6 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
      >
        Back to Dashboard
      </Link>
    </section>
  );
}