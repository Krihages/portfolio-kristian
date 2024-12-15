import {
  HeroProps,
  IntroductionProps,
  SkillListProps,
} from "@/types/components";
import Wrapper from "@/components/wrapper";
import Image from "next/image";
import { urlForImage } from "@/sanity/ImageBuilder";
import ToolTip from "@/components/tooltip";

export default function Hero({ hero }: HeroProps) {
  return (
    <Wrapper className="min-h-screen flex flex-col justify-center home hjem">
      <div className="flex max-lg:flex-col max-lg:items-center gap-20 justify-between w-full ">
        <div className="flex flex-col gap-4 max-w-lg">
          <h1 className="text-6xl font-bold leading-relaxed ">{hero.name}.</h1>
          <div className="w-24 h-3 bg-primary"></div>
        </div>
        <Introduction {...hero.introduction} />
      </div>
    </Wrapper>
  );
}

function Introduction({
  leading,
  header,
  paragraph,
  skills,
}: IntroductionProps) {
  return (
    <div className="flex flex-col gap-8 max-w-lg">
      <div className="flex gap-4 items-center">
        <div className="w-16 h-1 bg-primary"></div>
        <p className="text-2xl">{leading}</p>
      </div>
      <h2 className="text-4xl">{header}.</h2>
      <p className="text-lg">{paragraph}</p>
      <Skills skills={skills} />
    </div>
  );
}

function Skills({ skills }: { skills: SkillListProps }) {
  return (
    <>
      <div className="w-full h-0.5 bg-primary"></div>
      <div className="flex  gap-4 flex-wrap  items-center ">
        {skills.skillsList.map((skill) => (
          <div key={skill._key}>
            {skill.image && (
              <ToolTip message={skill.name}>
                <Image
                  src={urlForImage(skill.image).url()}
                  alt={skill.name}
                  width={30}
                  height={30}
                />
              </ToolTip>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
