import { cn } from "../../lib/utils";

type DesktopFooterProps = {
  className?: string;
};

export function DesktopFooter({ className }: DesktopFooterProps) {
  return (
    <div
      className={cn("w-full border-t border-neutral-elevation-3", className)}
    >
      DesktopFooter
    </div>
  );
}
