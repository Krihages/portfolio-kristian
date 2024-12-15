import { Components } from "@/types/components";
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
        return (
          <div key={component._key}>
            {component._type === "hero" && <Hero hero={component} />}
            {component._type === "projects" && (
              <Projects projects={component} />
            )}
            {component._type === "contact" && <Contact contact={component} />}
          </div>
        );
      })}
    </>
  );
}
