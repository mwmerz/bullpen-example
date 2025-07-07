import { cn } from "../../lib/utils";
import { Token } from "./Token";

type TokenBalanceProps = {
  token: string;
  balance: number;
  className?: string;
  tokenClassName?: string;
  textClassName?: string;
};

export const TokenBalance = ({
  token,
  balance,
  className,
  tokenClassName,
  textClassName,
}: TokenBalanceProps) => {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      <Token token={token} className={cn("w-4 h-4", tokenClassName)} />
      <span className={cn("text-white text-sm font-bold", textClassName)}>
        {balance}
      </span>
    </div>
  );
};
