import { Search, Star, Bell, Settings, ChevronDown } from "lucide-react";
import { BullpenLogo } from "../BullpenLogo";
import { cn } from "../../lib/utils";

type DesktopHeaderProps = {
  className?: string;
};

export function DesktopHeader({ className }: DesktopHeaderProps) {
  return (
    <header
      className={cn(
        "w-full hidden md:flex border-b border-[var(--neutral-elevation-3)]",
        className
      )}
    >
      <div className="w-full flex items-center justify-between px-3 py-3 min-h-[64px]">
        {/* Logo Section */}
        <div className="flex items-end gap-1">
          <BullpenLogo />
        </div>

        {/* Navigation and Controls */}
        <div className="flex items-center justify-between flex-1 ml-6 gap-4">
          {/* Navigation */}
          <nav className="flex items-center gap-4">
            <a
              href="#"
              className="text-[var(--neutral-200)] hover:text-white text-sm py-2 transition-colors"
            >
              Solana
            </a>
            <a
              href="#"
              className="text-[var(--neutral-200)] hover:text-white text-sm py-2 transition-colors"
            >
              Hyperliquid
            </a>
            <a
              href="#"
              className="text-[var(--neutral-200)] hover:text-white text-sm py-2 transition-colors"
            >
              Rewards
            </a>
            <div className="flex items-center gap-1 text-[var(--neutral-200)] hover:text-white text-sm py-2 cursor-pointer transition-colors">
              <span>More</span>
              <ChevronDown size={16} />
            </div>
          </nav>

          {/* Search and Controls */}
          <div className="flex items-center gap-2">
            {/* Search Bar */}
            <div className="flex items-center border border-bullpen-surface rounded bg-bullpen-bg px-3 py-2 w-[214px]">
              <Search
                size={16}
                className="text-[var(--neutral-200)]-tertiary mr-2 flex-shrink-0"
              />
              <input
                type="text"
                placeholder="Search for a Token or CA"
                className="bg-transparent text-sm text-[var(--neutral-200)]-tertiary placeholder:text-[var(--neutral-200)]-tertiary flex-1 outline-none min-w-0"
              />
            </div>

            {/* Action Buttons */}
            <button className="p-2 border border-bullpen-surface rounded bg-bullpen-bg hover:bg-bullpen-surface transition-colors">
              <Star size={16} className="text-white" />
            </button>

            <button className="flex items-center gap-2 px-3 py-2 border border-bullpen-surface rounded bg-bullpen-bg hover:bg-bullpen-surface transition-colors">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 14H2M12 7.33333L8 11.3333M8 11.3333L4 7.33333M8 11.3333V2"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span className="text-white text-sm">Fund</span>
            </button>

            {/* Wallet Display */}
            <div className="flex items-center gap-2 px-3 py-2 border border-bullpen-surface rounded bg-bullpen-bg">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M10.9999 9.33333H11.0065M1.99988 3.33333V12.6667C1.99988 13.403 2.59683 14 3.33321 14H12.6665C13.4029 14 13.9999 13.403 13.9999 12.6667V6C13.9999 5.26362 13.4029 4.66667 12.6665 4.66667L3.33321 4.66667C2.59683 4.66667 1.99988 4.06971 1.99988 3.33333ZM1.99988 3.33333C1.99988 2.59695 2.59683 2 3.33321 2H11.3332M11.3332 9.33333C11.3332 9.51743 11.184 9.66667 10.9999 9.66667C10.8158 9.66667 10.6665 9.51743 10.6665 9.33333C10.6665 9.14924 10.8158 9 10.9999 9C11.184 9 11.3332 9.14924 11.3332 9.33333Z"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex items-center gap-1">
                {/* SOL Token */}
                <div className="flex items-center gap-1">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-green-400 flex-shrink-0"></div>
                  <span className="text-white text-sm font-bold">0</span>
                </div>
                {/* USDC Token */}
                <div className="flex items-center gap-1">
                  <div className="w-4 h-4 rounded-full bg-blue-600 flex-shrink-0"></div>
                  <span className="text-white text-sm font-bold">0</span>
                </div>
              </div>
            </div>

            <button className="p-2 border border-bullpen-surface rounded bg-bullpen-bg hover:bg-bullpen-surface transition-colors">
              <Bell size={16} className="text-white" />
            </button>

            <button className="p-2 border border-bullpen-surface rounded bg-bullpen-bg hover:bg-bullpen-surface transition-colors">
              <Settings size={16} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
