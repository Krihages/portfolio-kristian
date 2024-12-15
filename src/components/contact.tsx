import Wrapper from "@/components/wrapper";
import { ContactProps } from "@/types/components";

export default function Contact({ contact }: ContactProps) {
  return (
    <Wrapper className="contact kontakt py-28">
      <h2 className="text-4xl font-bold">{contact.title}</h2>
      <p className="text-lg text-gray-300 ">{contact.description}</p>
      {contact.email && (
        <div className="flex gap-4 items-center pt-10">
          <p className="text-lg font-bold">Email:</p>
          <p className="text-lg text-gray-300">{contact.email}</p>
        </div>
      )}
    </Wrapper>
  );
}
