import { Card } from "@/components/ui/card";
import { IToolsProps } from "@/lib/tools";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ClassNameValue } from "tailwind-merge";

interface ICardProps extends IToolsProps {
  arrow?: boolean;
  className: ClassNameValue;
}

export function CardTool({
  href,
  icon,
  label,
  description,
  arrow = true,
  className,
}: ICardProps) {
  return (
    <Link href={href} passHref legacyBehavior>
      <Card
        className={cn(
          "p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer",
          className
        )}
      >
        <div className="flex items-center gap-x-4">
          <div className={cn("p-2 w-fit rounded-md", icon.background)}>
            <icon.image className={cn("w-8 h-8", icon.color)} />
          </div>
          <div>
            <p className="font-semibold">{label}</p>
            <div className="text-sm font-light">{description}</div>
          </div>
        </div>
        {arrow && <ArrowRight className="w-5 h-5" />}
      </Card>
    </Link>
  );
}
