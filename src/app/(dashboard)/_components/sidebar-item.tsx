import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface ISidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
  color: string;
}

export function SidebarItem({
  icon: Icon,
  label,
  href,
  color,
}: ISidebarItemProps) {
  const pathname = usePathname();
  const router = useRouter();

  const onClick = () => {
    router.push(href);
  };

  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "flex items-center gap-x-2 text-white text-sm pl-6 transition-all hover:bg-slate-300/20",
        isActive &&
          "text-white bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-400"
      )}
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon size={22} className={cn("text-white", color)} />
        {label}
      </div>
      <div
        className={cn(
          "ml-auto opacity-0 border-2 border-sky-700 h-full transition-all",
          isActive && "opacity-100"
        )}
      />
    </button>
  );
}
