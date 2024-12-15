import Wrapper from "./wrapper";
import { ContactProps } from "@/types/components";

export default function Contact(props: ContactProps) {
  return (
    <Wrapper className="contact kontakt py-28">
      <h2 className="text-4xl font-bold">{props.title}</h2>
      {props.description && (
        <p className="text-muted-foreground">{props.description}</p>
      )}
      {props.email && (
        <a
          href={`mailto:${props.email}`}
          className="text-muted-foreground hover:text-foreground"
        >
          {props.email}
        </a>
      )}
    </Wrapper>
  );
}
