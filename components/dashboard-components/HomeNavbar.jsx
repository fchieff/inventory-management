"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { HiOfficeBuilding } from "react-icons/hi";

export default function HomeNavbar() {
  const pathname = usePathname();
  console.log(pathname);

  const navLinks = [
    {
      title: "Dashboard",
      href: "/dashboard/home/overview",
    },
    {
      title: "Get Started",
      href: "/dashboard/home/getting-started",
    },
    {
      title: "Recent Updates",
      href: "/dashboard/home/updates",
    },
    {
      title: "Announcements",
      href: "/dashboard/home/announcements",
    },
  ];
  return (
    <div className="h-44  p-5 border-b border-slate-300 shadow ">
      <div className="flex items-center  px-8 py-4 space-x-4">
        <HiOfficeBuilding className=" w-10 h-10 rounded-lg border-2 border-slate-300 text-slate-900 items-center " />
        <div className="flex flex-col">
          <p>Welcome to your dashboard</p>
          <span className="text-xl font-bold">Luffy</span>
        </div>
      </div>

      <nav className="sticky mt-6 flex space-x-4 ">
        {navLinks.map((item, i) => (
          <Link
            href={item.href}
            className={`${
              pathname === item.href
                ? "py-3 border-b-3 rounded-xl border-blue-600  px-4"
                : "py-3  px-4"
            }`}
            key={i}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
