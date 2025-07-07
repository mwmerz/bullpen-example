import { cn } from "../../lib/utils";
const svgs = import.meta.glob("/src/assets/tokens/*.svg", {
  eager: true,
  import: "default",
}) as Record<string, string>;

type TokenProps = {
  token: string;
  className?: string;
};

export const Token = ({ token, className }: TokenProps) => {
  const SvgComponent = svgs[`/src/assets/tokens/${token}.svg`];

  // TODO: Add a fallback icon for unknown tokens
  if (!SvgComponent) {
    return (
      <span
        className={cn(
          "w-6 h-6 rounded-full bg-gray-500 flex items-center justify-center text-xs text-white",
          className
        )}
      >
        ?
      </span>
    );
  }

  return (
    <img src={SvgComponent} alt={`${token} icon`} className={cn(className)} />
  );
};
