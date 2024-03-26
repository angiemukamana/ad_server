import React from 'react'
import Link from "next/link"
import Admin from "@/components/Dashboard/admin";

export default function page() {
  return (
    <main>
    <div className="space-y-2 text-center mt-10">
      <h1 className="text-3xl font-bold">Agency</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Select options below<span></span>
        </p>
    </div>
    <Admin />
    </main>
  );
}
