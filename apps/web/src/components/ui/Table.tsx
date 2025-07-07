import { cn } from "../../lib/utils";

export const TableHeaderRow = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <thead>
      <tr
        className={cn(
          "border-b border-[var(--neutral-elevation-3)]",
          className
        )}
      >
        {children}
      </tr>
    </thead>
  );
};

export const TableHeaderCell = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <th
      className={cn(
        "text-xs text-left p-3 font-normal text-[var(--neutral-200)] bg-[var(--bg-primary)]",
        className
      )}
    >
      {children}
    </th>
  );
};

export const TableBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <tbody
      className={cn("divide-y divide-[var(--neutral-elevation-3)]", className)}
    >
      {children}
    </tbody>
  );
};

export const TableBodyRow = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <tr
      className={cn(
        "hover:bg-[var(--neutral-elevation-3)]/10 hover:cursor-pointer transition-colors min-h-[68px]",
        className
      )}
    >
      {children}
    </tr>
  );
};

export const TableBodyCell = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <td className={cn("px-3 py-3 bg-[var(--bg-primary)]", className)}>
      {children}
    </td>
  );
};
