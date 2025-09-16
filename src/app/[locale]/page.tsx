import sanityFetch from "@/sanity/sanityFetch";
import PageBuilder from "@/components/pageBuilder";
import Header from "@/components/header";

export default async function Page({
  params,
}: Readonly<{ params: { locale: string; slug: string } }>) {
  const resolvedParams = await Promise.resolve(params);
  const locale = resolvedParams.locale ?? "en";

  const data = await sanityFetch(locale);

  if (!data) return null;

  const components = data.content.sections;
  const header = data.navigation;

  return (
    <>
      <Header nav={header.nav} locale={locale as "en" | "no"} />
      <PageBuilder components={components} />
    </>
  );
}