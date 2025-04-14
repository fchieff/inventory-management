import Link from "next/link";
import React from "react";

export default function SubscriptionCard() {
  return (
    <div className="px-1  py-3">
      <div className="p-3  bg-slate-900 rounded-2xl">
        <div className="border-b border-slate-600 pb-3">
          <p className="text-white border-l-3 border-orange-400 pl-2 text-xl">
            Subscribe to our newsletter{" "}
            <span className="text-orange-300 ">Get latest</span> .
          </p>
        </div>
        <div className="flex justify-center  text-lg">
          <button className=" p-1 mr-2 border-r border-slate-600">
            Change Plan
          </button>
          <Link className="p-1" href="#">
            {" "}
            Upgrade
          </Link>
        </div>
      </div>
    </div>
  );
}
