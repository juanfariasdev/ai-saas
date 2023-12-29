import { Card } from "@/components/ui/card";
import { IToolsProps } from "@/lib/tools";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CardTool({ href, icon, label }: IToolsProps) {
  return (
    <Link href={href} passHref legacyBehavior>
      <Card className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer">
        <div className="flex items-center gap-x-4">
          <div className="p-2 w-fit rounded-md mix-blend-difference bg-zinc-800/30">
            <icon.image className={cn("w-8 h-8", icon.color)} />
          </div>
          <div className="font-semibold">{label}</div>
        </div>
        <ArrowRight className="w-5 h-5" />
      </Card>
    </Link>
  );
}
