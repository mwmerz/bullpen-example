import { cn } from "../../lib/utils";

type BarChartIconProps = {
  className?: string;
};

export const BarChartIcon = ({ className }: BarChartIconProps) => {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <path
        d="M3.30005 9.16667L3.30005 17.5M13.3 9.16667L13.3 17.5M8.30005 2.5L8.30005 17.5M18.3 2.5V17.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
