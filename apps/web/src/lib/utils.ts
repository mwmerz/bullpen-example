import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(num: number, showPlusSign: boolean = false) {
  if (num === 0) {
    return "—";
  }

  const formatted = num.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  if (showPlusSign && num > 0) {
    return `+${formatted}`;
  }

  return formatted;
}

export function formatDollar(num: number, shorten: boolean = true) {
  if (num === 0) {
    return "—";
  }

  if (shorten) {
    const absNum = Math.abs(num);
    let suffix = "";
    let divisor = 1;

    if (absNum >= 1e9) {
      suffix = "B";
      divisor = 1e9;
    } else if (absNum >= 1e6) {
      suffix = "M";
      divisor = 1e6;
    } else if (absNum >= 1e3) {
      suffix = "K";
      divisor = 1e3;
    }

    if (divisor > 1) {
      const shortened = (num / divisor).toFixed(1);
      const cleanNumber = shortened.endsWith(".0")
        ? shortened.slice(0, -2)
        : shortened;
      return `$${cleanNumber}${suffix}`;
    }
  }

  return num.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

export function formatPercentage(num: number, maxDecimals: number = 6) {
  if (num === 0) {
    return "—";
  }

  return num.toLocaleString("en-US", {
    style: "percent",
    minimumFractionDigits: 2,
    maximumFractionDigits: maxDecimals,
  });
}
