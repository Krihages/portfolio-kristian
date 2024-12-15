import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function localeValues(locale: string) {
  if (locale === "en") {
    return {
      en: "English",
      no: "Norwegian",
    };
  } else if (locale === "no") {
    return {
      en: "Engelsk",
      no: "Norsk",
    };
  }
  return {
    en: "English",
    no: "Norwegian",
  };
}
