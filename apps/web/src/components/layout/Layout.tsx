import en from "../../locales/en.json";
import { DesktopFooter } from "./DesktopFooter";
import { DesktopHeader } from "./DesktopHeader";

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <nav className="flex md:hidden" aria-label="Mobile Header" />
      <DesktopHeader />

      <main className="flex-1 overflow-x-auto overflow-y-auto p-4">
        {children}
      </main>

      <nav
        className="h-16 sticky bottom-0 bg-[var(--bg-primary)] border-t border-[var(--divider)] z-50 justify-around items-center text-xs flex md:justify-between md:px-4 md:hidden"
        aria-label="Mobile Navigation"
      >
        <button>{en.nav.solana}</button>
        <button>{en.nav.hyperliquid}</button>
        <button>{en.nav.search}</button>
        <button>{en.nav.wallet}</button>
        <button>{en.nav.rewards}</button>
      </nav>
      <DesktopFooter className="hidden md:flex" />
    </div>
  );
}
