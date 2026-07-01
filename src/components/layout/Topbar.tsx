// src/components/layout/Topbar.tsx
import { Bell, Menu, Search } from "lucide-react";
import { useLocation } from "react-router-dom";

import { ThemeToggle } from "../ui/ThemeToggle";

type TopbarProps = {
  onMenuClick: () => void;
};

const pageTitles: Record<string, string> = {
  "/": "Business Overview",
  "/orders": "Orders Management",
  "/customers": "Customer Management",
  "/settings": "Dashboard Settings",
};

export function Topbar({ onMenuClick }: TopbarProps) {
  const location = useLocation();

  const pageTitle = pageTitles[location.pathname] ?? "AdminFlow";

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white/90 px-4 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90 sm:px-6">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          className="rounded-xl border border-slate-200 bg-white p-2 text-slate-700 shadow-sm hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 lg:hidden"
          aria-label="Open sidebar"
        >
          <Menu size={20} />
        </button>

        <div>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Welcome back
          </p>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            {pageTitle}
          </h2>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 dark:border-slate-700 dark:bg-slate-900 md:flex">
          <Search size={16} className="text-slate-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-48 border-none bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400 dark:text-slate-200"
          />
        </div>

        <button
          type="button"
          className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
          aria-label="Notifications"
        >
          <Bell size={18} />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-indigo-600" />
        </button>

        <ThemeToggle />
      </div>
    </header>
  );
}