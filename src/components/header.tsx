"use client";

import { HeaderProps } from "@/types/header";
import Link from "next/link";
import LanguageSelect from "@/components/languageSelect";

export default function Header({ nav, locale }: HeaderProps) {
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    name: string
  ) => {
    e.preventDefault();
    const elements = document.getElementsByClassName(name.toLowerCase());
    if (elements.length > 0) {
      elements[0].scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="max-w-5xl mx-auto p-4 flex justify-end sticky top-0 bg-background z-10">
      <div className="flex justify-between items-center gap-6 w-full text-lg">
        <LanguageSelect locale={locale} />
        <nav className="flex justify-between items-center w-full max-w-80 text-lg">
          {nav.map((item) => (
            <Link
              key={item._key}
              href={`#${item.name.toLowerCase()}`}
              onClick={(e) => handleScroll(e, item.name)}
            >
              {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
