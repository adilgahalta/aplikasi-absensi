"use client";

import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();
  const isAdmin = session?.user?.role?.name === "admin"; // Adjust this based on how role is structured

  return (
    <div>
      <nav className="p-4 bg-primary text-primary-foreground flex justify-end gap-4">
        {isAdmin && (
          <button className="bg-green-600 rounded-lg px-3 py-1">
            <Link href="/dashboardAdmin">Admin Dashboard</Link>
          </button>
        )}
        <button className="bg-indigo-600 rounded-lg px-3 py-1">
          <Link href="/">Logout</Link>
        </button>
      </nav>
    </div>
  );
}
