"use client";

import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes, ReactNode } from "react";
import { trackWhatsAppConversion } from "@/app/lib/gtag";

type WhatsAppLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
    children: ReactNode;
  };

export function WhatsAppLink({ children, onClick, ...props }: WhatsAppLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    trackWhatsAppConversion();
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Link {...props} onClick={handleClick}>
      {children}
    </Link>
  );
}
