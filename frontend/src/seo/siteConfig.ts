export const SITE_ORIGIN = "https://trivantas.com";

export const DEFAULT_OG_IMAGE = `${SITE_ORIGIN}/images/logo.png`;

export const SITE_NAME = "Trivantas";

export const DEFAULT_TWITTER_CARD = "summary_large_image";

export const PRODUCTION_HOSTNAMES = new Set(["trivantas.com", "www.trivantas.com"]);

/**
 * Determines whether a given hostname is an authoritative production domain.
 * Non-production hosts (staging.*, *.vercel.app, localhost, preview deployments)
 * must be protected with noindex to avoid duplicate indexation.
 */
export function isProductionHostname(hostname?: string | null): boolean {
  if (!hostname) return false;
  const clean = hostname.toLowerCase().split(":")[0].trim();
  return PRODUCTION_HOSTNAMES.has(clean);
}

/**
 * Checks whether the current build environment represents a staging or preview deployment.
 * Supports Vercel (VERCEL_ENV), Netlify (CONTEXT), and standard CI variables (APP_ENV, STAGING).
 */
export function isNonProductionBuild(): boolean {
  if (typeof process === "undefined" || !process.env) {
    return false;
  }
  const vercelEnv = process.env.VERCEL_ENV;
  if (vercelEnv && vercelEnv !== "production") {
    return true;
  }
  const netlifyContext = process.env.CONTEXT;
  if (netlifyContext && netlifyContext !== "production") {
    return true;
  }
  const appEnv = process.env.APP_ENV || process.env.VITE_APP_ENV || process.env.DEPLOY_ENV;
  if (appEnv && appEnv !== "production") {
    return true;
  }
  return false;
}

