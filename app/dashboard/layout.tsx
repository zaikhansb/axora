"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { auth } from "@/lib/firebase";
import DashboardSidebar from "@/components/DashboardSidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        window.location.href = "/login";
      } else {
        setUser(currentUser);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const logout = async () => {
    await signOut(auth);
    window.location.href = "/";
  };

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center text-xl font-semibold">
        Loading...
      </main>
    );
  }

  return (
    <div className="flex min-h-screen">

      <DashboardSidebar />

      <div className="flex-1 bg-slate-100">

        <header className="bg-white shadow flex justify-between items-center px-8 py-4">

          <div>
            <h1 className="text-2xl font-bold text-blue-600">
              Axora Dashboard
            </h1>

            <p className="text-sm text-gray-500">
              {user?.email}
            </p>
          </div>

          <button
            onClick={logout}
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg"
          >
            Logout
          </button>

        </header>

        <main className="p-8">
          {children}
        </main>

      </div>

    </div>
  );
}