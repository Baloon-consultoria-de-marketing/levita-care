export const GA_TRACKING_ID = "AW-18039450310";
export const CONVERSION_ID = "AW-18039450310/qpKrCJu4v_McEMbv8JID";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    gtag_report_conversion?: (url?: string) => boolean | void;
  }
}

export const trackWhatsAppConversion = (url?: string) => {
  if (typeof window === "undefined") return;

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
