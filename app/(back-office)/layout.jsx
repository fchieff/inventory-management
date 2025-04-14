import Header from "@/components/dashboard-components/Header";
import Sidebar from "@/components/dashboard-components/Sidebar";
import React from "react";

export default function layout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="w-full ml-64 min-h-screen bg-slate-200">
        <Header />
        {children}
      </main>
    </div>
  );
}
