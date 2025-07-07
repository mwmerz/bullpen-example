import { DesktopHeader } from "./DesktopHeader";
import { DesktopFooter } from "./DesktopFooter";
import { MobileHeader } from "./MobileHeader";
import { MobileFooter } from "./MobileFooter";

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <MobileHeader />
      <DesktopHeader />

      <main className="flex-1 overflow-x-auto overflow-y-auto p-4">
        {children}
      </main>

      <MobileFooter />
      <DesktopFooter />
    </div>
  );
}
