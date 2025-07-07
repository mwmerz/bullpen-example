import React from "react";

interface TableProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export function Table({
  children,
  className = "",
  containerClassName = "",
}: TableProps) {
  return (
    <div className={`w-full h-full ${containerClassName}`}>
      <div
        className={`self-stretch flex flex-col justify-start items-start gap-2 ${className}`}
      >
        {children}
      </div>
    </div>
  );
}

interface TableHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function TableHeader({ children, className = "" }: TableHeaderProps) {
  return (
    <div
      className={`w-full border-b border-[var(--neutral-elevation-3)] flex justify-start items-start ${className}`}
    >
      {children}
    </div>
  );
}

export function TableRowDivider() {
  return (
    <div className="w-full h-0 border-b border-[var(--neutral-elevation-3)]"></div>
  );
}

interface TableRowProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function TableRow({ children, className = "", onClick }: TableRowProps) {
  return (
    <div
      className={`w-full h-16 flex items-center ${
        onClick ? "cursor-pointer" : ""
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

interface TableCellProps {
  children: React.ReactNode;
  className?: string;
  width?: string;
  align?: "start" | "center" | "end";
}

export function TableCell({
  children,
  className = "",
  width,
  align = "start",
}: TableCellProps) {
  const alignmentClass = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
  }[align];

  return (
    <div
      className={`h-16 p-3 flex items-center ${
        width || "flex-1"
      } ${alignmentClass} ${className}`}
    >
      {children}
    </div>
  );
}

interface DataTableProps {
  children: React.ReactNode;
  className?: string;
}

export function DataTable({ children, className = "" }: DataTableProps) {
  return (
    <div
      className={`self-stretch opacity-90 rounded-lg flex flex-col justify-start items-start overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}
