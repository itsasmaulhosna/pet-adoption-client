
"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

import {
  FaBars,
  FaTimes,
  FaPlus,
  FaList,
  FaInbox,
} from "react-icons/fa";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const menu = [
    {
      name: "My Requests",
      href: "/dashboard/my-requests",
      icon: <FaInbox />,
    },
    {
      name: "Add Pet",
      href: "/dashboard/add-pet",
      icon: <FaPlus />,
    },
    {
      name: "My Listings",
      href: "/dashboard/my-listings",
      icon: <FaList />,
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-[#06142E]">

      {/* SIDEBAR */}
      <aside
        className={`
          fixed md:static top-0 left-0
          h-screen w-64
          bg-white dark:bg-[#0B1F3A]
          border-r border-gray-200 dark:border-white/10
          transform transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >

        {/* TOP MENU TITLE */}
        <div className="p-5 border-b border-gray-200 dark:border-white/10">
          <h2 className="text-lg font-bold tracking-wide">
            Menu
          </h2>
        </div>

        {/* MENU ITEMS */}
        <nav className="p-4 space-y-2">

          {menu.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  flex items-center gap-3 p-3 rounded-xl
                  transition-all duration-300

                  ${
                    isActive
                      ? "bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white shadow-lg"
                      : "hover:bg-gray-100 dark:hover:bg-white/10"
                  }
                `}
              >
                {item.icon}
                {item.name}
              </Link>
            );
          })}

        </nav>
      </aside>

      {/* MAIN */}
      <div className="flex-1">

        {/* TOP BAR */}
        <div className="flex items-center justify-between p-4 bg-white dark:bg-[#06142E] border-b border-gray-200 dark:border-white/10">

          {/* MOBILE MENU */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <FaTimes /> : <FaBars />}
          </button>

          <h1 className="text-xl font-bold">
            Dashboard
          </h1>

          <div></div>
        </div>

        {/* PAGE CONTENT */}
        <div className="p-6">
          {children}
        </div>

      </div>

    </div>
  );
}

