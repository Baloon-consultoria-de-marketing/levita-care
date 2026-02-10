import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function SectionWrapper({ children, className = "", id }: SectionWrapperProps) {
  return (
    <div id={id} className={`relative z-10 mx-auto max-w-6xl px-6 py-16 ${className}`}>
      {children}
    </div>
  );
}
