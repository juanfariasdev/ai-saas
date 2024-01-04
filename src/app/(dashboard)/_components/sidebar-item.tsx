import { IToolsProps } from "@/lib/tools";
import { cn } from "@/lib/utils";

import { usePathname, useRouter } from "next/navigation";

export function SidebarItem({ icon: Icon, label, href }: IToolsProps) {
  const pathname = usePathname();
  const router = useRouter();

  const onClick = () => {
    router.push(href);
  };

  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href

  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "flex items-center gap-x-2 text-white text-sm pl-6 transition-all hover:bg-slate-300/20 rounded-md hover:font-bold",
        isActive &&
          "bg-sky-200/20 hover:bg-sky-200/20 text-sky-400 font-semibold"
      )}
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon.image size={22} className={cn("text-white", Icon.color)} />
        {label}
      </div>
     
    </button>
  );
}
