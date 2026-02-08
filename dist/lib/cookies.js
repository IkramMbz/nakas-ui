const COOKIE_MAX_AGE = 365 * 24 * 60 * 60;
export function parseCookies(cookieString) {
    const cookies = {};
    const source = cookieString || (typeof document !== "undefined" ? document.cookie : "");
    if (!source)
        return cookies;
    source.split(";").forEach((cookie) => {
        const [key, value] = cookie.trim().split("=");
        if (key && value) {
            cookies[key] = decodeURIComponent(value);
        }
    });
    return cookies;
}
export function getCookie(name, cookieString) {
    const cookies = parseCookies(cookieString);
    return cookies[name] || null;
}
export function setCookie(name, value, maxAge = COOKIE_MAX_AGE) {
    if (typeof document === "undefined")
        return;
    document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAge}; SameSite=Lax`;
}
export function deleteCookie(name) {
    if (typeof document === "undefined")
        return;
    document.cookie = `${name}=; path=/; max-age=0`;
}
//# sourceMappingURL=cookies.js.map