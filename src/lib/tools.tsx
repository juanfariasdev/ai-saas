import {
  Code,
  ImageIcon,
  LayoutDashboard,
  LucideIcon,
  MessageSquare,
  Music,
  Settings,
  VideoIcon
} from "lucide-react";

export interface IToolsProps {
  label: string;
  description?: string;
  icon: {
    color: string;
    image: LucideIcon;
  };
  href: string;
  isTool?: boolean;
}
export const tools: IToolsProps[] = [
  {
    icon: {
      color: "text-sky-500",
      image: LayoutDashboard
    },
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: {
      color: "text-violet-500",
      image: MessageSquare
    },
    label: "Conversation",
    href: "/dashboard/ai/conversation",
    isTool: true,
  },
  {
    icon: {
      color: "text-pink-500",
      image: ImageIcon
    },
    label: "Image Generation",
    href: "/dashboard/ai/image",
    isTool: true,
  },
  {
    icon: {
      color: "text-orange-500",
      image: VideoIcon
    },
    label: "Video Generation",
    href: "/dashboard/ai/video",
    isTool: true,
  },
  {
    icon: {
      image: Music,
      color: "text-emerald-500",
    },
    label: "Music Generation",
    href: "/dashboard/ai/music",
    isTool: true,
  },
  {
    icon: {
      image: Code,
      color: "text-green-500",
    },
    label: "Code Generation",
    href: "/dashboard/ai/code",

    isTool: true,
  },
  {
    icon: {
      image: Settings,
      color: "text-white",
    },
    label: "Settings",
    href: "/dashboard/settings",

  },
];

export function findTool(href: string) {
  const item = tools.find(tool => tool.href === href)

  return item

}