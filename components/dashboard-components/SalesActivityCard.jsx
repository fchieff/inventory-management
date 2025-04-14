import Link from "next/link";
import React from "react";
import { FiCheckCircle } from "react-icons/fi";

export default function SalesActivityCard({item}) {
  return (
    <Link
      href={item.href}
      className="rouded items-center  justify-center flex flex-col bg-white border border-slate-200 hover:border-slate-400 transition duration-300  rounded-2xl p-3 gap-4"
    >
      <h3 className={`${item.color} text-3xl font-semibold`}>{item.number}</h3>
      <small>{item.unity}</small>
      <div className="flex items-center justify-center">
        <FiCheckCircle className="w-5 h-5 text-green-600" />
        <span className="uppercase">{item.title}</span>
      </div>
    </Link>
  );
}
