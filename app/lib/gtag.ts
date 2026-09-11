export const GA_TRACKING_ID = "AW-18039450310";
export const CONVERSION_ID = "AW-18039450310/qpKrCJu4v_McEMbV8JID";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const trackWhatsAppConversion = () => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: CONVERSION_ID,
    });
  }
};
