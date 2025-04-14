import SalesActivityCard from "./SalesActivityCard";
import InventorySummaryCard from "./InventorySummaryCard";

export default function SalesOverview() {
  const salesActivity = [
    {
      title: "To be Packged",
      number: 10,
      unity: "Qty",
      href: "#",
      color: "text-blue-600",
    },
    {
      title: "To be Shipped",
      number: 10,
      unity: "Pkgs",
      href: "#",
      color: "text-red-600",
    },
    {
      title: "To be Delivered",
      number: 10,
      unity: "Pkgs",
      href: "#",
      color: "text-green-600",
    },
    {
      title: "To be Invoiced",
      number: 10,
      unity: "Qty",
      href: "#",
      color: "text-orange-600",
    },
  ];

  const inventorySummary = [
    {
        title: "Quantity in Hand",
        number: 10,
        href: "#",
        color: "text-blue-600",
    },
    {
        title: "Quantity to be received",
        number: 12,
        href: "#",
        color: "text-green-600",
    },
  ]

  return (
    <div className="p-16 bg-blue-100 border-b shadow items-center border-slate-300 grid grid-cols-12">
      {/* Sales Overview */}
      <div className="col-span-8">
        <h2 className="text-2xl mb-6 font-semibold">Sales Overview</h2>
        <div className=" grid grid-cols-4 gap-4">
          {/* Card */}
          {salesActivity.map((item, i) => {
            return (
          <SalesActivityCard item={item} i={i} key={i} />
            );
          })}
        </div>
      </div>
      {/* Inventory Summary */}
      
      <div className="items-center col-span-4  pl-5">
        <h2 className="text-2xl mb-6 font-semibold">Inventory Summary</h2>
        {inventorySummary.map((item, i) => {
          return (
           <InventorySummaryCard item={item} i={i} key={i} />
          );
        })}
        
      </div>
    </div>
  );
}
