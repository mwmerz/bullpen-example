import { ChevronDown } from "lucide-react";
import { usePerpData } from "../../../hooks/usePerpData";
import { MarketDataItem } from "../../../lib/marketData";
import {
  formatDollar,
  formatNumber,
  formatPercentage,
} from "../../../lib/utils";
import {
  TableHeaderRow,
  TableHeaderCell,
  TableBody,
  TableBodyRow,
  TableBodyCell,
} from "../../../components/ui";

export function PerpsView() {
  const { data, isLoading } = usePerpData();

  // TODO: add dynamic sorting - for now just sorting by last price
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
            <TableHeaderCell>24h Change</TableHeaderCell>
            <TableHeaderCell>24h Volume</TableHeaderCell>
            <TableHeaderCell>8h Funding</TableHeaderCell>
            <TableHeaderCell>Open Interest / Market Cap</TableHeaderCell>
          </TableHeaderRow>

          {/* Table Body */}
          <TableBody>
            {data.map((token: MarketDataItem, index: number) => (
              <TableBodyRow key={index}>
                {/* Token Column */}
                <TableBodyCell className="flex items-center gap-3 sticky pl-0 left-0 bg-[var(--bg-primary)]">
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
                    {formatDollar(token.lastPrice, false)}
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
                    {formatNumber(token.change24hAmount, true)} /{" "}
                    {formatPercentage(token.change24h, 2)}
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
