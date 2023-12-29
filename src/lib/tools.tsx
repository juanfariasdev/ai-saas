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
    image: LucideIcon;
    color: string;
    background: string;
  };
  href: string;
  isTool?: boolean;
}
export const tools: IToolsProps[] = [
  {
    label: "Dashboard",
    description: "Our most advanced conversation model.",
    icon: {
      image: LayoutDashboard,
      color: "text-sky-500",
      background:"bg-sky-800/20",
    },
    href: "/dashboard",
  },
  {
    label: "Conversation",
    description: "Our most advanced conversation model.",
    icon: {
      image: MessageSquare,
      color: "text-violet-500",
      background:"bg-violet-200",
    },
    href: "/dashboard/ai/conversation",
    isTool: true,
  },
  {
    label: "Image Generation",
    description: "Our most advanced Image generate model.",
    icon: {
      image: ImageIcon,
      color: "text-pink-500",
      background:"bg-pink-200",
    },
    href: "/dashboard/ai/image",
    isTool: true,
  },
  {
    label: "Video Generation",
    description: "Our most advanced video generate model.",
    icon: {
      image: VideoIcon,
      color: "text-orange-500",
      background:"bg-orange-200",
    },
    href: "/dashboard/ai/video",
    isTool: true,
  },
  {
    label: "Music Generation",
    description: "Our most advanced music generate model.",
    icon: {
      image: Music,
      color: "text-emerald-500",
      background:"bg-emerald-200",
    },
    href: "/dashboard/ai/music",
    isTool: true,
  },
  {
    label: "Code Generation",
    description: "Our most advanced code generate model.",
    icon: {
      image: Code,
      color: "text-green-500",
      background:"bg-green-200",
    },
    href: "/dashboard/ai/code",

    isTool: true,
  },
  {
    label: "Settings",
    description: "Our most advanced settings generate model.",
    icon: {
      image: Settings,
      color: "text-white",
      background:"bg-zinc-200",
    },
    href: "/dashboard/settings",

  },
];

export function findTool(href: string) {
  const item = tools.find(tool => tool.href === href)

  return item

}