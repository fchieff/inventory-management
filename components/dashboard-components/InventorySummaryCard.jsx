import Link from "next/link";
import React from "react";

export default function InventorySummaryCard({item}) {
  return (
    <Link
      href={item.href}
      className="rouded items-center flex justify-between  bg-white border border-slate-200 hover:border-slate-400 transition duration-300  rounded-2xl p-4"
    >
      <h2 className="uppercase">{item.title}</h2>
      <h3 className={`${item.color} text-3xl font-semibold`}>{item.number}</h3>
    </Link>
  );
}
