import en from "../../locales/en.json";
import { MobileNavButton } from "../ui/MobileNavButton";

export function MobileFooter() {
  return (
    <nav
      className="h-16 sticky bottom-0 bg-[var(--bg-primary)] border-t border-[var(--divider)] z-50 justify-around items-center text-xs flex md:justify-between md:px-4 md:hidden"
      aria-label="Mobile Navigation"
    >
      <MobileNavButton icon="bar-chart" label={en.nav.solana} />
      <MobileNavButton icon="perps" label={en.nav.hyperliquid} active />
      <MobileNavButton icon="search" label={en.nav.search} />
      <MobileNavButton icon="wallet" label={en.nav.wallet} />
      <MobileNavButton icon="gift" label={en.nav.rewards} />
    </nav>
  );
}
