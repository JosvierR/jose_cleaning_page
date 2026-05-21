import { cn } from "@/lib/utils";

export function LuxuryDivider({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "h-px w-full max-w-md bg-gradient-to-r from-transparent via-silver to-transparent",
        className
      )}
    />
  );
}
