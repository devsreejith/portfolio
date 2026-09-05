// Reusable Google Analytics 4 (GA4) Helper Module
// Supports window.gtag safely without crashing if missing or blocked.

export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-6N4RCCQSG6"; // Placeholder: G-XXXXXXXXXX

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

/**
 * Reusable helper to send custom events to GA4
 * @param eventName Custom event name (e.g., 'resume_download', 'whatsapp_click')
 * @param params Custom event parameters
 */
export const trackEvent = (
  eventName: string,
  params: Record<string, any> = {}
) => {
  if (typeof window === "undefined") return;

  try {
    const eventParams = {
      page_title: document.title,
      page_location: window.location.href,
      language: navigator.language || "en-US",
      ...params,
    };

    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, eventParams);
    } else if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: eventName,
        ...eventParams,
      });
    }
  } catch (err) {
    // Fail safely without errors or UI disruption
    console.warn(`[Analytics] Tracking skipped for "${eventName}":`, err);
  }
};
