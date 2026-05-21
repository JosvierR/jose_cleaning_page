import { cn } from "@/lib/utils";

export function SectionLabel({
  children,
  className,
  light,
}: {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <p
      className={cn(
        "label-maison",
        light ? "text-porcelain/50" : "text-navy/45",
        className
      )}
    >
      {children}
    </p>
  );
}
