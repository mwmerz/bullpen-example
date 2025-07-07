import { cn } from "../../lib/utils";
import {
  BarChartIcon,
  SearchIcon,
  WalletIcon,
  GiftIcon,
  PerpsIcon,
  DownloadIcon,
} from "../icons";

const iconMap = {
  "bar-chart": BarChartIcon,
  search: SearchIcon,
  wallet: WalletIcon,
  gift: GiftIcon,
  perps: PerpsIcon,
  download: DownloadIcon,
};

type IconProps = {
  icon: string;
  className?: string;
};

export const Icon = ({ icon, className }: IconProps) => {
  const IconComponent = iconMap[icon as keyof typeof iconMap];

  if (!IconComponent) {
    return (
      <span
        className={cn(
          "w-4 h-4 rounded-full bg-gray-500 flex items-center justify-center text-xs text-white",
          className
        )}
      >
        ?
      </span>
    );
  }

  return <IconComponent className={className} />;
};
