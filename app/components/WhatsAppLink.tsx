"use client";

import { AnchorHTMLAttributes, ReactNode } from "react";
import { trackWhatsAppConversion } from "@/app/lib/gtag";
import { getWhatsAppUrl } from "@/app/lib/whatsapp";

export type WhatsAppLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  message?: string;
  skipBridge?: boolean;
};

export function WhatsAppLink({
  children,
  onClick,
  id,
  href,
  message,
  skipBridge = false,
  target,
  rel,
  ...props
}: WhatsAppLinkProps) {
  // Se for explicitamente configurado para pular a página de obrigado
  if (skipBridge) {
    const directHref = href || getWhatsAppUrl(message);
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      trackWhatsAppConversion(directHref, id);
      if (onClick) {
        onClick(e);
      }
    };

    return (
      <a
        id={id}
        href={directHref}
        target={target || "_blank"}
        rel={rel || "noopener noreferrer"}
        {...props}
        onClick={handleClick}
      >
        {children}
      </a>
    );
  }

  // Abordagem A: Direciona para a página de ponte (/obrigado/)
  const queryParams = new URLSearchParams();
  if (message) queryParams.set("message", message);
  if (id) queryParams.set("source", id);
  const queryString = queryParams.toString();
  const bridgeHref = `/obrigado/${queryString ? `?${queryString}` : ""}`;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    trackWhatsAppConversion(bridgeHref, id);
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <a
      id={id}
      href={bridgeHref}
      target={target || "_self"}
      rel={rel}
      {...props}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
