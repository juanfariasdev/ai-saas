import {
  Code,
  ImageIcon,
  LayoutDashboard,
  LucideIcon,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
} from "lucide-react";

export interface IToolsProps {
  icon: LucideIcon;
  label: string;
  href: string;
  color: string;
}
export const tools: IToolsProps[] = [
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
