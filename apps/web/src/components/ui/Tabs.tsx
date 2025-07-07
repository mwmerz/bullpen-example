import { ReactNode, useState } from "react";
import { cn } from "../../lib/utils";

export type Tab = {
  id: string;
  label: string;
  content: ReactNode;
};

type TabsProps = {
  tabs: Tab[];
  defaultTab?: string;
  className?: string;
  tabClassName?: string;
  activeTabClassName?: string;
  inactiveTabClassName?: string;
};

export function Tabs({
  tabs,
  defaultTab,
  className,
  tabClassName,
  activeTabClassName,
  inactiveTabClassName,
}: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className={cn("w-full", className)}>
      <div className="flex items-center gap-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={cn(
              "text-[var(--neutral-200)] text-lg font-normal py-3 border-b-2 transition-colors",
              tabClassName,
              activeTab === tab.id
                ? cn(
                    "border-[var(--primary-400)] text-white",
                    activeTabClassName
                  )
                : cn("border-transparent", inactiveTabClassName)
            )}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="w-full h-full">{activeTabData?.content}</div>
    </div>
  );
}
