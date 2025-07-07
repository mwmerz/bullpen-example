import { cn } from "../../lib/utils";
import { ReactNode } from "react";

type ButtonVariant = "icon" | "text" | "default";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
};

export const Button = ({
  children,
  variant = "default",
  className,
  onClick,
  disabled = false,
}: ButtonProps) => {
  const baseClasses =
    "border border-[var(--neutral-elevation-3)] rounded bg-[var(--bg-primary)] hover:bg-[var(--neutral-elevation-3)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed";

  const variantClasses = {
    icon: "p-2",
    text: "flex items-center gap-2 px-3 py-2",
    default: "px-3 py-2",
  };

  return (
    <button
      className={cn(baseClasses, variantClasses[variant], className)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
