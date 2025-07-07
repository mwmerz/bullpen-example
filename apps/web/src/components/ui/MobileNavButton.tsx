import { cn } from "../../lib/utils";
import { Icon } from "./Icon";

type MobileNavButtonProps = {
  icon: string;
  label: string;
  active?: boolean;
};

export const MobileNavButton = ({
  icon,
  label,
  active,
}: MobileNavButtonProps) => {
  return (
    <button className={cn("flex flex-col items-center justify-center p-2")}>
      <Icon
        icon={icon}
        className={cn(
          "w-5 h-5 pb-1 text-[var(--neutral-200)]",
          active && "text-[var(--primary-400)]"
        )}
      />
      <span
        className={cn(
          "text-xs text-[var(--neutral-200)]",
          active && "text-[var(--primary-400)]"
        )}
      >
        {label}
      </span>
    </button>
  );
};
