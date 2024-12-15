type BaseComponent = {
  _type: string;
  _key: string;
};

export type HeroProps = BaseComponent & {
  _type: "hero";
  name: string;
  subtitle?: string;
  image?: string;
  introduction: IntroductionProps;
};

export type IntroductionProps = {
  leading?: string;
  header?: string;
  paragraph?: string;
  skills: SkillListProps;
};

export type SkillListProps = {
  skillsList: SkillProps[];
};

export type SkillProps = {
  _key: string;
  name: string;
  type?: string;
  image?: Image;
};

type Image = {
  _type: string;
  _key: string;
  asset: {
    ref: string;
    _type: string;
  };
};

export type ProjectsProps = BaseComponent & {
  _type: "projects";
  projectsList: ProjectProps[];
};

export type ProjectProps = {
  _key: string;
  title: string;
  description: string;
  media: Image[];
  liveLink: string;
  githubLink: string;
  stack: techStack[];
};

type techStack =
  | "tailwind"
  | "nextjs"
  | "react"
  | "typescript"
  | "sanity"
  | "javascript"
  | "html"
  | "css";

export type ContactProps = BaseComponent & {
  _type: "contact";
  title: string;
  description?: string;
  email?: string;
};

export type Components = HeroProps | ProjectsProps | ContactProps;
