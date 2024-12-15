export type HeaderProps = {
  nav: NavItem[];
  locale: "en" | "no";
};

type NavItem = {
  name: string;
  link?: string;
  _key: string;
  _type?: string;
};
