import {
  Atom,
  CreditCard,
  HomeIcon,
  LogOut,
  Rss,
  Settings,
  ShoppingCart,
  Users,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="p-3 bg-white h-full">
      <div className="my-2 p-3">
        <Link href="/" className="flex items-center">
          <Atom size={25} className="text-sky-500" />
          <span className="font-semibold text-xl ml-2">customAuth</span>
        </Link>
      </div>
      <div className="mt-5">
        <nav>
          <Link
            href="/dashboard"
            className="flex gap-2 text-[13px] font-semibold bg-gray-100 text-gray-500 py-3 px-3 mb-4 rounded-lg"
          >
            <HomeIcon size={20} />
            <span>Dashboard</span>
          </Link>
          <Link
            href="/dashboard"
            className="flex gap-2 text-[13px] font-semibold hover:bg-gray-100 text-gray-500 py-3 px-3  mb-4 rounded-lg"
          >
            <ShoppingCart size={20} />
            <span>Products</span>
          </Link>
          <Link
            href="/dashboard/users"
            className="flex gap-2 text-[13px] font-semibold hover:bg-gray-100 text-gray-500 py-3 px-3  mb-4 rounded-lg"
          >
            <Users size={20} />
            <span>Users</span>
          </Link>
          <Link
            href="/dashboard"
            className="flex gap-2 text-[13px] font-semibold hover:bg-gray-100 text-gray-500 py-3 px-3  mb-4 rounded-lg"
          >
            <Rss size={20} />
            <span>Blogs</span>
          </Link>
          <Link
            href="/dashboard"
            className="flex gap-2 text-[13px] font-semibold hover:bg-gray-100 text-gray-500 py-3 px-3 mb-4 rounded-lg"
          >
            <CreditCard size={20} />
            <span>Invoices</span>
          </Link>
          <Link
            href="/dashboard"
            className="flex gap-2 text-[13px] font-semibold hover:bg-gray-100 text-gray-500 py-3 px-3 mb-4 rounded-lg"
          >
            <Settings size={20} />
            <span>Settings</span>
          </Link>
          <Link
            href="/dashboard"
            className="flex gap-2 text-[13px] font-semibold hover:bg-gray-100 text-gray-500 py-3 px-3 mb-4 rounded-lg"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
