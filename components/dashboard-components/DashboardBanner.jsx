"use client";
import { useState } from "react";
import { FaCreditCard } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
export default function DashboardBanner() {
  const [hidden, setHidden] = useState(false);

  return (
    <div
      className={`${
        hidden
          ? "hidden"
          : "p-10 relative  gap-3 grid grid-cols-12 justify-between items-center bg-slate-100"
      }`}
    >
      <div className="col-span-2">
        <FaCreditCard className="w-15 h-15 text-emerald-600" />
      </div>
      <div className="col-span-6">
        <h2 className="text-2xl font-bold">Welcome to Luffy</h2>
        <p>Get started with your inventory management</p>
      </div>
      <div className="col-span-3">
        <button className="py-3 px-8 cursor-pointer bg-blue-700 font-bold text-white uppercase rounded-2xl">
          Enable
        </button>
      </div>
      <button onClick={() => setHidden(true)} className=" cursor-pointer absolute top-8 right-16">
      <FaTimes   className="w-5 h-5 text-gray-600" />
      </button>
    </div>
  );
}
