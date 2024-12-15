import {
  Components,
  ContactProps,
  HeroProps,
  ProjectsProps,
} from "@/types/components";
import Hero from "./hero";
import Projects from "./projects";
import Contact from "./contact";

export default function PageBuilder({
  components,
}: {
  components: Components[];
}) {
  return (
    <>
      {components?.map((component) => {
        console.log("component type", component._type);
        return (
          <div key={component?._key}>
            {component._type === "hero" && (
              <Hero hero={component as HeroProps} />
            )}
            {component._type === "projects" && (
              <Projects projects={component as ProjectsProps} />
            )}
            {component._type === "contact" && (
              <Contact contact={component as ContactProps} />
            )}
          </div>
        );
      })}
    </>
  );
}
