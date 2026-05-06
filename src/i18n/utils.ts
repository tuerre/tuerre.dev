import { es, en } from "./translations";
import type { Lang } from "./translations";

export function getLang(url: URL | string): Lang {
  const pathname = typeof url === "string" ? url : url.pathname;
  if (pathname.startsWith("/en")) return "en";
  return "es";
}

export function t(lang: Lang, key: string): string {
  const translations = lang === "en" ? en : es;
  const keys = key.split(".");
  let value: unknown = translations;
  for (const k of keys) {
    value = (value as Record<string, unknown>)?.[k];
  }
  return typeof value === "string" ? value : key;
}

export function getAltLang(lang: Lang): Lang {
  return lang === "en" ? "es" : "en";
}

export function getLangSwitchUrl(lang: Lang, currentPage: string): string {
  const alt = getAltLang(lang);
  return currentPage ? `/${alt}/${currentPage}` : `/${alt}/`;
}
