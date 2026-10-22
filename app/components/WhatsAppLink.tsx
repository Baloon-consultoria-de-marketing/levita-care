"use client";

import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes, ReactNode } from "react";
import { trackWhatsAppConversion } from "@/app/lib/gtag";
import { getWhatsAppUrl } from "@/app/lib/whatsapp";

type WhatsAppLinkProps = Omit<LinkProps, "href"> &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
    children: ReactNode;
    href?: string;
    message?: string;
  };

export function WhatsAppLink({
  children,
  onClick,
  id,
  href,
  message,
  target = "_blank",
  rel = "noopener noreferrer",
  ...props
}: WhatsAppLinkProps) {
  const finalHref = href || getWhatsAppUrl(message);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    trackWhatsAppConversion(finalHref, id);
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Link id={id} href={finalHref} target={target} rel={rel} {...props} onClick={handleClick}>
      {children}
    </Link>
  );
}
