import { cn } from "../../../lib/utils";
import { tokenData } from "../../../data/token-data";
import { ChevronDown } from "lucide-react";

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
  return (
    <div className="w-full mx-auto">
      {/* Desktop Table */}
      <div className="block rounded-lg overflow-hidden min-w-[1196px] overflow-x-auto">
        <table className="w-full table-fixed">
          {/* Table Header */}
          <TableHeaderRow>
            <TableHeaderCell className="pl-0 w-[259px] sticky left-0">
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
            {tokenData.map((token, index) => (
              <TableBodyRow key={index}>
                {/* Token Column */}
                <TableBodyCell className="flex items-center gap-3 sticky left-0">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-lg flex-shrink-0">
                    {token.icon}
                  </div>
                  <div className="flex flex-col ">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-white text-sm font-medium">
                        {token.symbol}
                      </span>
                      <span className="text-[var(--neutral-200)] text-xs bg-[var(--neutral-elevation-3)] px-1.5 py-0.5 rounded">
                        {token.leverage}
                      </span>
                    </div>
                  </div>
                </TableBodyCell>

                {/* Price Column */}
                <TableBodyCell>
                  <span className="text-white text-sm truncate">
                    {token.price}
                  </span>
                </TableBodyCell>

                {/* Change Column */}
                <TableBodyCell>
                  <span
                    className={`text-sm truncate ${
                      token.isPositive
                        ? "text-[var(--primary-400)]"
                        : "text-[var(--alert-400)]"
                    }`}
                  >
                    {token.change} / {token.changePercent}
                  </span>
                </TableBodyCell>

                {/* Volume Column */}
                <TableBodyCell>
                  <span className="text-white text-sm truncate">
                    {token.volume}
                  </span>
                </TableBodyCell>

                {/* Funding Column */}
                <TableBodyCell>
                  <span className="text-white text-sm truncate">
                    {token.funding}
                  </span>
                </TableBodyCell>

                {/* Open Interest Column */}
                <TableBodyCell>
                  <span className="text-white text-sm truncate">
                    {token.openInterest}
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
