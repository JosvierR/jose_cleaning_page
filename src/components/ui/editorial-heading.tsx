import { cn } from "@/lib/utils";

export function EditorialHeading({
  children,
  className,
  as: Tag = "h2",
  light,
}: {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
  light?: boolean;
}) {
  return (
    <Tag
      className={cn(
        "font-editorial text-4xl leading-[1.08] tracking-tight md:text-5xl lg:text-6xl xl:text-7xl",
        light ? "text-porcelain" : "text-navy",
        className
      )}
    >
      {children}
    </Tag>
  );
}
