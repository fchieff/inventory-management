import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { FaChevronLeft } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { HiArchive } from "react-icons/hi";
import { HiTrendingUp } from "react-icons/hi";
import { FiShoppingBag } from "react-icons/fi";
import { FaPuzzlePiece } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import { FaFolderOpen } from "react-icons/fa";
import Link from "next/link";
import SubscriptionCard from "./SubscriptionCard";

export default function Sidebar() {
  return (
    <div
      className="w-64 min-h-screen
     bg-slate-800 text-slate-50 fixed flex flex-col"
    >
      <div className="flex flex-col shadow-2xl">
        <Link
          href="#"
          className="bg-slate-950 flex items-center space-x-3 py-3 px-2"
        >
          <FiShoppingCart className="w-8 h-8 " />
          <span className="text-xl font-bold ">Inventory</span>
        </Link>
      </div>

      <nav className="flex flex-col gap-8 py-6 px-2 text-gray-100">
        <Link
          className="flex space-x-2 hover:bg-blue-400 rounded-lg p-2 "
          href="/"
        >
          <FiHome className="w-6 h-6 " />
          <span>Home</span>
        </Link>
        <button className="p-2 flex space-x-2" href="/">
          <HiArchive className="w-6 h-6 " />
          <span>Inventory</span>
        </button>
        <button className="p-2 flex space-x-2" href="/">
          <HiTrendingUp className="w-6 h-6 " />
          <span>Sales</span>
        </button>
        <button className="p-2 flex space-x-2" href="/">
          <FiShoppingBag className="w-6 h-6 " />
          <span>Purchases</span>
        </button>
        <button className="p-2 flex space-x-2" href="/">
          <FaPuzzlePiece className="w-6 h-6 " />
          <span>Integrations</span>
        </button>
        <button className="p-2 flex space-x-2" href="/">
          <FiFileText className="w-6 h-6 " />
          <span>Reports</span>
        </button>
        <button className="p-2 flex space-x-2" href="/">
          <FaFolderOpen className="w-6 h-6 " />
          <span>Documents</span>
        </button>
      </nav>
      <div className="mt-auto">
        <SubscriptionCard />
      </div>

      <div className="flex flex-col mt-auto    ">
        <button className="bg-slate-950 flex items-center justify-center space-x-3 py-3 px-2">
          <FaChevronLeft className="w-8 h-8 " />
        </button>
      </div>
    </div>
  );
}
