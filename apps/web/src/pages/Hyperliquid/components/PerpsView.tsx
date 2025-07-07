interface TokenData {
  symbol: string;
  icon: string;
  leverage: string;
  price: string;
  change: string;
  changePercent: string;
  volume: string;
  funding: string;
  openInterest: string;
  isPositive: boolean;
}

const tokenData: TokenData[] = [
  {
    symbol: "BTC–USD",
    icon: "🪙",
    leverage: "40x",
    price: "$107,309.00",
    change: "-140",
    changePercent: "-0.13%",
    volume: "$478.4M",
    funding: "0.0100%",
    openInterest: "$3B",
    isPositive: false,
  },
  {
    symbol: "BTC–USD",
    icon: "🪙",
    leverage: "40x",
    price: "$107,309.00",
    change: "-140",
    changePercent: "-0.13%",
    volume: "$478.4M",
    funding: "0.0100%",
    openInterest: "$3B",
    isPositive: false,
  },
  {
    symbol: "BTC–USD",
    icon: "🪙",
    leverage: "40x",
    price: "$107,309.00",
    change: "-140",
    changePercent: "-0.13%",
    volume: "$478.4M",
    funding: "0.0100%",
    openInterest: "$3B",
    isPositive: false,
  },
];

export function PerpsView() {
  return (
    <div className="w-full max-w-[1196px] mx-auto">
      {/* Desktop Table */}
      <div className="block rounded-lg overflow-hidden min-w-[1196px] overflow-x-auto">
        {/* Table Header */}
        <div className="flex border-b border-[var(--neutral-elevation-3)]">
          <div className="flex items-center justify-start px-3 py-3 min-w-[259px] flex-shrink-0">
            <span className="text-[var(--neutral-200)] text-xs font-normal">
              Token
            </span>
          </div>
          <div className="flex items-center gap-1 px-3 py-3 flex-1 min-w-0">
            <span className="text-[var(--neutral-200)] text-xs font-normal">
              Last Price
            </span>
          </div>
          <div className="flex items-center px-3 py-3 flex-1 min-w-0">
            <span className="text-[var(--neutral-200)] text-xs font-normal">
              24h Change
            </span>
          </div>
          <div className="flex items-center px-3 py-3 flex-1 min-w-0">
            <span className="text-[var(--neutral-200)] text-xs font-normal">
              24h Volume
            </span>
          </div>
          <div className="flex items-center px-3 py-3 flex-1 min-w-0">
            <span className="text-[var(--neutral-200)] text-xs font-normal">
              8h Funding
            </span>
          </div>
          <div className="flex items-center px-3 py-3 flex-1 min-w-0">
            <span className="text-[var(--neutral-200)] text-xs font-normal">
              Open Interest / Market Cap
            </span>
          </div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-[var(--neutral-elevation-3)]">
          {tokenData.map((token, index) => (
            <div
              key={index}
              className="flex hover:bg-[var(--neutral-elevation-3)]/10 hover:cursor-pointer transition-colors min-h-[68px]"
            >
              {/* Token Column */}
              <div className="flex items-center gap-3 px-3 py-3 min-w-[259px] flex-shrink-0">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-lg flex-shrink-0">
                  {token.icon}
                </div>
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-white text-sm font-medium">
                      {token.symbol}
                    </span>
                    <span className="text-[var(--neutral-200)] text-xs bg-[var(--neutral-elevation-3)] px-1.5 py-0.5 rounded">
                      {token.leverage}
                    </span>
                  </div>
                </div>
              </div>

              {/* Price Column */}
              <div className="flex items-center px-3 py-3 flex-1 min-w-0">
                <span className="text-white text-sm truncate">
                  {token.price}
                </span>
              </div>

              {/* Change Column */}
              <div className="flex items-center px-3 py-3 flex-1 min-w-0">
                <span
                  className={`text-sm truncate ${
                    token.isPositive ? "text-bullpen-green" : "text-bullpen-red"
                  }`}
                >
                  {token.change} / {token.changePercent}
                </span>
              </div>

              {/* Volume Column */}
              <div className="flex items-center px-3 py-3 flex-1 min-w-0">
                <span className="text-white text-sm truncate">
                  {token.volume}
                </span>
              </div>

              {/* Funding Column */}
              <div className="flex items-center px-3 py-3 flex-1 min-w-0">
                <span className="text-white text-sm truncate">
                  {token.funding}
                </span>
              </div>

              {/* Open Interest Column */}
              <div className="flex items-center px-3 py-3 flex-1 min-w-0">
                <span className="text-white text-sm truncate">
                  {token.openInterest}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
