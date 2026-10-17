"use client";

import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes, ReactNode } from "react";
import { trackWhatsAppConversion } from "@/app/lib/gtag";

type WhatsAppLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
    children: ReactNode;
  };

export function WhatsAppLink({ children, onClick, id, ...props }: WhatsAppLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    trackWhatsAppConversion(props.href?.toString(), id);
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Link id={id} {...props} onClick={handleClick}>
      {children}
    </Link>
  );
}
