"use client";

import {
  BarChart,
  Code,
  Compass,
  ImageIcon,
  Layout,
  LayoutDashboard,
  List,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
} from "lucide-react";
import { SidebarItem } from "./sidebar-item";
import { usePathname } from "next/navigation";

const guestRoutes = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    icon: MessageSquare,
    label: "Conversation",
    href: "/dashboard/conversation",
    color: "text-violet-500",
  },
  {
    icon: ImageIcon,
    label: "Image Generation",
    href: "/dashboard/image",
    color: "text-pink-500",
  },
  {
    icon: VideoIcon,
    label: "Video Generation",
    href: "/dashboard/video",
    color: "text-orange-500",
  },
  {
    icon: Music,
    label: "Music Generation",
    href: "/dashboard/music",
    color: "text-emerald-500",
  },
  {
    icon: Code,
    label: "Code Generation",
    href: "/dashboard/code",
    color: "text-green-500",
  },
  {
    icon: Settings,
    label: "Settings",
    href: "/dashboard/settings",
    color: "text-white",
  },
];
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

  const routes = isAdminPage ? adminRoutes : guestRoutes;
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
