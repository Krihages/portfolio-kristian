"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { localeValues } from "@/lib/utils";

const languages = {
  en: {
    flag: "/english-flag.png",
    label: "English",
  },
  no: {
    flag: "/norwegian-flag.png",
    label: "Norwegian",
  },
};

export default function LanguageSelect({ locale }: { locale: "en" | "no" }) {
  const [selectedLang, setSelectedLang] = useState(locale);
  const router = useRouter();
  const localLabels = localeValues(locale);

  return (
    <Select
      defaultValue={locale}
      onValueChange={(value) => {
        setSelectedLang(value as "en" | "no");
        localStorage.setItem("locale", value);
        router.push(`/${value}`);
      }}
    >
      <SelectTrigger className="w-fit border-none bg-card">
        <SelectValue>
          <div className="flex items-center gap-2">
            <Image
              src={languages[selectedLang as keyof typeof languages].flag}
              alt={languages[selectedLang as keyof typeof languages].label}
              width={20}
              height={20}
              className="rounded-sm"
            />
            <span>
              {/*          {languages[selectedLang as keyof typeof languages].label} */}
            </span>
          </div>
        </SelectValue>
      </SelectTrigger>
      <SelectContent className=" border-none bg-card text-foreground">
        {Object.entries(languages).map(([code, { flag, label }]) => (
          <SelectItem
            key={code}
            value={code}
            className="flex items-center gap-2"
          >
            <div className="flex items-center gap-2">
              <Image
                src={flag}
                alt={label}
                width={20}
                height={20}
                className="rounded-sm"
              />
              <span>{localLabels[code as keyof typeof localLabels]}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
