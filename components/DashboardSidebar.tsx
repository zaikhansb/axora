"use client";

import Link from "next/link";
import { Home, Package, Building2, Users, Settings } from "lucide-react";

export default function DashboardSidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen p-6">

      <h1 className="text-3xl font-bold text-blue-400 mb-10">
        Axora
      </h1>

      <nav className="space-y-3">

        <Link
          href="/dashboard"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
        >
          <Home size={20} />
          Dashboard
        </Link>

        <Link
          href="/products"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
        >
          <Package size={20} />
          Products
        </Link>

        <Link
          href="/manufacturers"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
        >
          <Building2 size={20} />
          Manufacturers
        </Link>

        <Link
          href="/buyers"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
        >
          <Users size={20} />
          Buyers
        </Link>

        <Link
          href="/settings"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800"
        >
          <Settings size={20} />
          Settings
        </Link>

      </nav>

    </aside>
  );
}