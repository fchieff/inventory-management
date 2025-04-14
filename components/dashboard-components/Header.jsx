import React from "react";
import { FaHistory } from "react-icons/fa";
import { FiChevronsDown, FiPlus } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { FiBell } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";
import { FiGrid } from "react-icons/fi";
import Search from "./Search";
import Image from "next/image";
export default function Header() {
  return (
    <div className=" flex bg-slate-200 h-14 items-center justify-between px-6  border-b border-slate-300 shadow ">
      <div className="flex gap-3">
        <button className="">
          <FaHistory className="w-6 h-6" />
        </button>
        
        <Search></Search>
      </div>

      <div className="flex">
        <div className="flex pl-2 pr-2 border-r border-b-gray-300 items-center justify-center">
          <button className="bg-blue-600 text-white rounded-lg p-1.5">
            <FiPlus className="w-5 h-5" />
          </button>
        </div>

        <div className="pl-2 flex pr-2 border-r border-b-gray-300 items-center justify-center">
          <button className="hover:bg-slate-400 text-slate-900 rounded-lg p-1.5">
            <FiUsers className="w-5 h-5" />
          </button>

          <button className="hover:bg-slate-400 text-slate-900 rounded-lg p-1.5">
            <FiBell className="w-5 h-5" />
          </button>

          <button className="hover:bg-slate-400 text-slate-900 rounded-lg p-1.5">
            <FiSettings className="w-5 h-5" />
          </button>
        </div>

        <div className="flex pl-2 ">
          <button className=" flex items-center justify-center ">
            <span>Garant</span>
            <FiChevronsDown className="w-4 h-4 pt-1 text-gray-700" />
          </button>

          <button className="flex pl-2">
            <Image
              src="/reciclagem.png"
              alt="user"
              width={34}
              height={34}
              className=" rounded-full p-1 border border-slate-900 "
            />
          </button>

          <button className=" pl-2">
            <FiGrid className="w-7 h-7 text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  );
}
