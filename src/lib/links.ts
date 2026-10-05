/**
 * Every outbound link and price on the landing page lives here so the real
 * values can be swapped in one place. Everything below is a placeholder for
 * the design reference.
 */
export const LINKS = {
  /** Stripe Payment Link: first seat $399/mo, additional seats $199/mo, no trial. */
  purchase: "https://buy.stripe.com/REPLACE_va_purchase",
  /** Stripe Payment Link with the 14-day trial configured on it. */
  trial: "https://buy.stripe.com/REPLACE_va_trial",
  /** Cal.com, Calendly, or Google appointment page. */
  booking: "https://cal.com/REPLACE/20min",
  /**
   * Hosted demo video. Accepts a YouTube / Loom / Vimeo embed URL or a direct
   * .mp4 / .webm file. Leave empty to show the poster with a "coming soon" tag.
   */
  demoVideo: "",
  contactEmail: "vukota@perpetual-us.com",
} as const;

export const PRICING = {
  firstSeat: 399,
  additionalSeat: 199,
  trialDays: 14,
  state: "Virginia",
  /** Upper bound on the seat picker. Larger teams are pointed to a call. */
  maxSeats: 50,
  /** From this many total seats on, the seat step suggests booking a call for team pricing. */
  teamHintAt: 6,
} as const;

/**
 * Checkout link for a given seat count. The `seats` query param is a hint for
 * the real integration (e.g. a Checkout Session with that line-item quantity);
 * a plain Stripe Payment Link ignores it.
 */
export const checkoutUrl = (base: string, seats: number) =>
  `${base}${base.includes("?") ? "&" : "?"}seats=${seats}`;
