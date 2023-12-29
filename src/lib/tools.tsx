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
  isTool?: boolean;
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
    href: "/dashboard/ai/conversation",
    color: "text-violet-500",
    isTool: true,
  },
  {
    icon: ImageIcon,
    label: "Image Generation",
    href: "/dashboard/ai/image",
    color: "text-pink-500",
    isTool: true,
  },
  {
    icon: VideoIcon,
    label: "Video Generation",
    href: "/dashboard/ai/video",
    color: "text-orange-500",
    isTool: true,
  },
  {
    icon: Music,
    label: "Music Generation",
    href: "/dashboard/ai/music",
    color: "text-emerald-500",
    isTool: true,
  },
  {
    icon: Code,
    label: "Code Generation",
    href: "/dashboard/ai/code",
    color: "text-green-500",
    isTool: true,
  },
  {
    icon: Settings,
    label: "Settings",
    href: "/dashboard/settings",
    color: "text-white",
  },
];
