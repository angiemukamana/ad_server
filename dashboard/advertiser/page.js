import React from 'react'
import Link from "next/link"
import Advertiser from "@/components/Dashboard/advertiser";

export default function page() {
  return (
    <main>
    <div className="space-y-2 text-center mt-10">
      <h1 className="text-3xl font-bold">Advertiser</h1>
        <p className="text-gray-500 dark:text-gray-400">
         <span></span>
        </p>
    </div>
    <Advertiser />
    </main>
  );
}
