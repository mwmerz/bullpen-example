import { Tabs, type Tab } from "../../components/ui/Tabs";
import { SpotView } from "./components/SpotView";
import { PerpsView } from "./components/PerpsView";

const tabs: Tab[] = [
  {
    id: "perps",
    label: "Perps",
    content: <PerpsView />,
  },
  {
    id: "spot",
    label: "Spot",
    content: <SpotView />,
  },
];

export function HyperliquidPage() {
  return (
    <div className="w-full h-full">
      <Tabs className="mt-6" tabs={tabs} defaultTab="perps" />
    </div>
  );
}
