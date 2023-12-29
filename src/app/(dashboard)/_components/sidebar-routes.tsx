"use client";

import { tools } from "@/lib/tools";
import { SidebarItem } from "./sidebar-item";
import { usePathname } from "next/navigation";
import { BarChart, List } from "lucide-react";

const adminRoutes = [
  {
    icon: List,
    label: "Courses",
    href: "/teacher/courses",
    color: "text-sky-500",
  },
  {
    icon: BarChart,
    label: "Analytics",
    href: "/teacher/analytics",
    color: "text-sky-500",
  },
];

export function SidebarRoutes() {
  const pathname = usePathname();

  const isAdminPage = pathname.includes("/admin");

  const routes = isAdminPage ? adminRoutes : tools;
  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
          color={route.color}
        />
      ))}
    </div>
  );
}
