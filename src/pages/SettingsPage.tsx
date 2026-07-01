// src/pages/SettingsPage.tsx
import {
  BarChart3,
  Building2,
  Code2,
  Database,
 
  Globe,
  LayoutDashboard,
  MonitorSmartphone,
  Palette,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { ThemeToggle } from "../components/ui/ThemeToggle";

const techStack = [
  "React",
  "TypeScript",
  "Vite",
  "Tailwind CSS",
  "React Router",
  "Recharts",
  "ESLint",
];

const projectFeatures = [
  "Responsive layout",
  "Dark and light mode",
  "KPI cards",
  "Charts",
  "Search filters",
  "Pagination",
  "Reusable components",
  "Typed mock data",
];

export function SettingsPage() {
  return (
    <section className="space-y-6">
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            Settings
          </h1>

          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Manage dashboard preferences, business information, and project
            details.
          </p>
        </div>

        <Button>Save Changes</Button>
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <div className="mb-6 flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-400">
              <Building2 size={24} />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                Business Profile
              </h2>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Demo company information used to simulate a real admin
                dashboard.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-950">
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Company Name
              </p>
              <p className="mt-2 font-semibold text-slate-900 dark:text-white">
                AdminFlow Solutions
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-950">
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Industry
              </p>
              <p className="mt-2 font-semibold text-slate-900 dark:text-white">
                Business Management
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-950">
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Location
              </p>
              <p className="mt-2 font-semibold text-slate-900 dark:text-white">
                Remote / Global
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-950">
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Dashboard Version
              </p>
              <p className="mt-2 font-semibold text-slate-900 dark:text-white">
                v1.0.0
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="mb-6 flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-400">
              <Palette size={24} />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                Appearance
              </h2>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Switch between light and dark mode.
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-950">
            <p className="text-sm font-medium text-slate-900 dark:text-white">
              Theme preference
            </p>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Your selected theme is saved locally in the browser.
            </p>

            <div className="mt-4">
              <ThemeToggle showLabel />
            </div>
          </div>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card>
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
            <ShieldCheck size={24} />
          </div>

          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Project Goal
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
            Build a professional frontend dashboard that demonstrates React,
            TypeScript, reusable components, responsive design, data
            visualization, search, filters, and pagination.
          </p>
        </Card>

        <Card>
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400">
            <MonitorSmartphone size={24} />
          </div>

          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Responsive Design
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
            The interface is designed to work on desktop, tablet, and mobile
            screens using Tailwind CSS utility classes and a responsive sidebar.
          </p>
        </Card>

        <Card>
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-400">
            <Sparkles size={24} />
          </div>

          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Portfolio Ready
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
            This project is structured to be published on GitHub, deployed with
            GitHub Pages, and presented in job applications or freelance
            proposals.
          </p>
        </Card>
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <Card>
          <div className="mb-6 flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
              <Code2 size={24} />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                Tech Stack
              </h2>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Main technologies used in this frontend project.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {techStack.map((technology) => (
              <Badge key={technology} variant="info">
                {technology}
              </Badge>
            ))}
          </div>
        </Card>

        <Card>
          <div className="mb-6 flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
              <LayoutDashboard size={24} />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                Features
              </h2>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Functionalities implemented in the dashboard.
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {projectFeatures.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3 rounded-xl bg-slate-50 p-3 dark:bg-slate-950"
              >
                <div className="h-2 w-2 rounded-full bg-indigo-600" />

                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card>
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-600 text-white">
              <BarChart3 size={24} />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                AdminFlow Portfolio Project
              </h2>

              <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-500 dark:text-slate-400">
                A modern business admin dashboard built with React, TypeScript,
                Tailwind CSS, React Router, and Recharts. Created to demonstrate
                frontend development skills through a realistic, responsive, and
                professional user interface.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="https://github.com/Jasonfuentess/business-admin-dashboard"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              <Code2 size={18} />
              GitHub
            </a>

            <a
              href="https://jasonfuentess.github.io/business-admin-dashboard/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              <Globe size={18} />
              Live Demo
            </a>
          </div>
        </div>
      </Card>

      <Card>
        <div className="mb-6 flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
            <Database size={24} />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
              Future Improvements
            </h2>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Possible enhancements for future versions.
            </p>
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-950">
            <p className="font-semibold text-slate-900 dark:text-white">
              Backend API
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
              Connect the dashboard to an ASP.NET Core Web API.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-950">
            <p className="font-semibold text-slate-900 dark:text-white">
              Authentication
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
              Add login, JWT authentication, and user roles.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-950">
            <p className="font-semibold text-slate-900 dark:text-white">
              Real Database
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
              Store orders and customers using SQL Server or PostgreSQL.
            </p>
          </div>
        </div>
      </Card>
    </section>
  );
}