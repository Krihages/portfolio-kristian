import sanityFetch from "@/sanity/sanityFetch";
import Link from "next/link";

export default async function page({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const data = await sanityFetch(params.locale);
  if (!data) return null;
  const content = data.content[0];

  const translations = data._translations;

  return (
    <>
      <div className="flex gap-6 justify-center items-center pt-10">
        {translations.map(
          (translation: { slug: { current: string }; language: string }) => (
            <Link
              className="bg-blue-800 py-4 px-8 flex justify-center items-center  text-white  rounded-xl"
              key={translation.slug.current}
              href={`/${translation.language}/${translation.slug.current}`}
            >
              {translation.language.toUpperCase()} version
            </Link>
          )
        )}
      </div>
      <div className="flex flex-col gap-10 min-h-screen w-full justify-center items-center text-3xl">
        <div>
          <h1>{content.header}</h1>
          <p>{content.text}</p>
        </div>
      </div>
    </>
  );
}
