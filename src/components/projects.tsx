import { ProjectsProps } from "@/types/components";
import Wrapper from "@/components/wrapper";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { urlForImage } from "@/sanity/ImageBuilder";
import Image from "next/image";
import Link from "next/link";
import ToolTip from "@/components/tooltip";
import { LinkIcon, GithubIcon } from "@/components/icons";

export default function Projects({ projects }: { projects: ProjectsProps }) {
  console.log("projects", projects.projectsList[0].stack);
  return (
    <Wrapper className="flex flex-col gap-20 portefølje portfolio">
      <h2 className="text-4xl font-bold">{projects?.title ?? "Portfolio"}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {projects.projectsList?.map((project) => (
          <Card key={project._key} className="border-none flex flex-col gap-2">
            <Link
              href={project.liveLink}
              target="_blank"
              className="aspect-[3/2] relative"
            >
              <Image
                src={urlForImage(project?.media[0]).url()}
                alt={project.title}
                fill
                className="object-fill rounded-t-xl"
                quality={100}
              />
            </Link>
            <div className="flex flex-col justify-between gap-2 h-full">
              <CardHeader>
                <CardTitle className="text-lg font-bold">
                  {project.title}
                </CardTitle>
                <div className="flex flex-row gap-1  items-center">
                  {project.stack.map((stack) => (
                    <ToolTip message={stack} key={stack}>
                      <Image
                        src={`/logos/${stack}-logo.png`}
                        alt={stack}
                        width={25}
                        height={25}
                        className="rounded-lg"
                      />
                    </ToolTip>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p>{project.description}</p>
              </CardContent>
              <CardFooter className="flex flex-row gap-4 text-sm  ">
                <Link href={project.liveLink} target="_blank">
                  <ToolTip message="Link to live project">
                    <LinkIcon />
                  </ToolTip>
                </Link>
                <Link href={project.githubLink} target="_blank">
                  <ToolTip message="Link to github repository">
                    <GithubIcon />
                  </ToolTip>
                </Link>
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
    </Wrapper>
  );
}
