import { defineQuery } from "next-sanity";
import { client } from "./client";
import { SanityFetchFunction } from "@/types/sanity";

const sanityFetch: SanityFetchFunction = async (language, slug) => {
  const query = defineQuery(
    `*[_type == "page" && language == "${language}"${
      slug ? ` && slug.current == "${slug}"` : ""
    }][0]{
      content,  
      language,
      navigation,
      
      "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
        slug,
        language, 
      }
    }`
  );

  const data = await client.fetch(query);

  return data;
};

export default sanityFetch;
