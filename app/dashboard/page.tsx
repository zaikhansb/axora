"use client";

import DashboardSidebar from "@/components/DashboardSidebar";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        window.location.href = "/login";
      } else {
        setUser(currentUser);
      }
    });

    return () => unsubscribe();
  }, []);

  const logout = async () => {
    await signOut(auth);
    window.location.href = "/";
  };

  if (!user) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        Loading...
      </main>
    );
  }

  return (
    <div className="flex">
      <DashboardSidebar />

      <main className="flex-1 bg-slate-100 min-h-screen p-10">
        <h1 className="text-4xl font-bold text-blue-600">
          Welcome to Axora 🚀
        </h1>

        <p className="mt-5 text-gray-600">
          Logged in as:
        </p>

        <p className="font-semibold text-blue-600 mb-8">
          {user.email}
        </p>

        <button
          onClick={logout}
          className="bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-lg"
        >
          Logout
        </button>
      </main>
    </div>
  );
}