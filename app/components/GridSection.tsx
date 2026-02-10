import { ReactNode } from "react";

interface GridSectionProps {
  left: ReactNode;
  right: ReactNode;
  leftFirst?: boolean;
  className?: string;
}

export function GridSection({ left, right, leftFirst = true, className = "" }: GridSectionProps) {
  const order = leftFirst ? "lg:order-first" : "lg:order-last";

  return (
    <section className={`grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center ${className}`}>
      <div className={order}>{left}</div>
      <div>{right}</div>
    </section>
  );
}
