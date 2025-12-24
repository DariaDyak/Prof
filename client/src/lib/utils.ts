import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function withBaseUrl(assetPath: string) {
  if (!assetPath) return assetPath;

  // Leave absolute URLs / data URLs untouched
  if (/^(https?:)?\/\//i.test(assetPath) || assetPath.startsWith("data:")) {
    return assetPath;
  }

  const baseUrl = (import.meta as any).env?.BASE_URL ?? "/";
  const normalizedBase = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
  const normalizedPath = assetPath.startsWith("/") ? assetPath.slice(1) : assetPath;

  return `${normalizedBase}${normalizedPath}`;
}
