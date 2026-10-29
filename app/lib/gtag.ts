export const GA_TRACKING_ID = "AW-18039450310";
export const CONVERSION_ID = "AW-18039450310/qpKrCJu4v_McEMbv8JID";
export const GTM_ID = "GTM-NB9FTSP6";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    gtag_report_conversion?: (url?: string) => boolean | void;
  }
}

export const trackWhatsAppConversion = (url?: string, buttonId?: string) => {
  if (typeof window === "undefined") return;

  // Dispara evento para o Google Tag Manager (GTM)
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "whatsapp_click",
    button_id: buttonId || "whatsapp_link",
    destination_url: url || "",
  });

  if (typeof window.gtag_report_conversion === "function") {
    window.gtag_report_conversion(url);
    return;
  }

  if (typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: CONVERSION_ID,
    });
  } else if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push([
      "event",
      "conversion",
      {
        send_to: CONVERSION_ID,
      },
    ]);
  }
};

export const trackThankYouConversion = () => {
  if (typeof window === "undefined") return;

  // Dispara evento específico para o Google Tag Manager (GTM)
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "conversion_obrigado",
    page_path: "/obrigado/",
  });

  if (typeof window.gtag_report_conversion === "function") {
    window.gtag_report_conversion("/obrigado/");
    return;
  }

  if (typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: CONVERSION_ID,
    });
  } else if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push([
      "event",
      "conversion",
      {
        send_to: CONVERSION_ID,
      },
    ]);
  }
};

