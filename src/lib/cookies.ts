const COOKIE_MAX_AGE = 365 * 24 * 60 * 60;

export function parseCookies(cookieString?: string): Record<string, string> {
  const cookies: Record<string, string> = {};
  const source =
    cookieString || (typeof document !== "undefined" ? document.cookie : "");

  if (!source) return cookies;

  source.split(";").forEach((cookie) => {
    const [key, value] = cookie.trim().split("=");
    if (key && value) {
      cookies[key] = decodeURIComponent(value);
    }
  });

  return cookies;
}

export function getCookie(name: string, cookieString?: string): string | null {
  const cookies = parseCookies(cookieString);
  return cookies[name] || null;
}

export function setCookie(
  name: string,
  value: string,
  maxAge: number = COOKIE_MAX_AGE
): void {
  if (typeof document === "undefined") return;
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAge}; SameSite=Lax`;
}

export function deleteCookie(name: string): void {
  if (typeof document === "undefined") return;
  document.cookie = `${name}=; path=/; max-age=0`;
}
