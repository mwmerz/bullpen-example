import { ChevronDown } from "lucide-react";
import { cn } from "../../../lib/utils";
import { usePerpData } from "../../../hooks/usePerpData";
import { MarketDataItem } from "../../../lib/marketData";
import {
  formatDollar,
  formatNumber,
  formatPercentage,
} from "../../../lib/utils";

const TableHeaderRow = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <thead>
      <tr
        className={cn(
          "border-b border-[var(--neutral-elevation-3)]",
          className
        )}
      >
        {children}
      </tr>
    </thead>
  );
};

const TableHeaderCell = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <th
      className={cn(
        "text-xs text-left p-3 font-normal text-[var(--neutral-200)] bg-[var(--bg-primary)]",
        className
      )}
    >
      {children}
    </th>
  );
};

const TableBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <tbody
      className={cn("divide-y divide-[var(--neutral-elevation-3)]", className)}
    >
      {children}
    </tbody>
  );
};

const TableBodyRow = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <tr
      className={cn(
        "hover:bg-[var(--neutral-elevation-3)]/10 hover:cursor-pointer transition-colors min-h-[68px]",
        className
      )}
    >
      {children}
    </tr>
  );
};

const TableBodyCell = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <td className={cn("px-3 py-3 bg-[var(--bg-primary)]", className)}>
      {children}
    </td>
  );
};

export function PerpsView() {
  const { data, isLoading } = usePerpData();

  data?.sort((a, b) => b.lastPrice - a.lastPrice);

  if (isLoading) return <div>Loading...</div>;

  if (!data) return <div>No data</div>;

  return (
    <div className="w-full mx-auto">
      {/* Desktop Table */}
      <div className="block rounded-lg overflow-hidden min-w-[1196px] overflow-x-auto relative">
        <table className="w-full table-fixed">
          {/* Table Header */}
          <TableHeaderRow>
            <TableHeaderCell className="pl-0 w-[259px] sticky left-0 bg-[var(--bg-primary)]">
              Token
            </TableHeaderCell>
            <TableHeaderCell className="flex items-center w-[163px] gap-1">
              Last Price
              <ChevronDown size={12} className="text-[var(--neutral-200)]" />
            </TableHeaderCell>
            <TableHeaderCell className="w-[163px]">24h Change</TableHeaderCell>
            <TableHeaderCell className="w-[163px]">24h Volume</TableHeaderCell>
            <TableHeaderCell className="w-[163px]">8h Funding</TableHeaderCell>
            <TableHeaderCell>Open Interest / Market Cap</TableHeaderCell>
          </TableHeaderRow>

          {/* Table Body */}
          <TableBody>
            {data.map((token: MarketDataItem, index: number) => (
              <TableBodyRow key={index}>
                {/* Token Column */}
                <TableBodyCell className="flex items-center gap-3 sticky left-0 bg-[var(--bg-primary)]">
                  <div>
                    <img
                      src={token.image}
                      alt={token.pair}
                      className="w-9 h-9 rounded-full flex items-center justify-center text-lg flex-shrink-0"
                    />
                  </div>
                  <div className="flex flex-col ">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-white text-sm font-medium">
                        {token.pair}
                      </span>
                      <span className="text-[var(--neutral-200)] text-xs bg-[var(--neutral-elevation-3)] px-1.5 py-0.5 rounded">
                        {token.leverage}x
                      </span>
                    </div>
                  </div>
                </TableBodyCell>

                {/* Price Column */}
                <TableBodyCell>
                  <span className="text-white text-sm truncate">
                    {formatDollar(token.lastPrice)}
                  </span>
                </TableBodyCell>

                {/* Change Column */}
                <TableBodyCell>
                  <span
                    className={`text-sm truncate ${
                      token.change24h > 0
                        ? "text-[var(--primary-400)]"
                        : "text-[var(--alert-400)]"
                    }`}
                  >
                    {formatNumber(token.change24hAmount)} /{" "}
                    {formatPercentage(token.change24h)}
                  </span>
                </TableBodyCell>

                {/* Volume Column */}
                <TableBodyCell>
                  <span className="text-white text-sm truncate">
                    {formatDollar(token.volume24h)}
                  </span>
                </TableBodyCell>

                {/* Funding Column */}
                <TableBodyCell>
                  <span className="text-white text-sm truncate">
                    {formatPercentage(token.funding8h)}
                  </span>
                </TableBodyCell>

                {/* Open Interest Column */}
                <TableBodyCell>
                  <span className="text-white text-sm truncate">
                    {formatDollar(token.openInterestMarketCap)}
                  </span>
                </TableBodyCell>
              </TableBodyRow>
            ))}
          </TableBody>
        </table>
      </div>
    </div>
  );
}
