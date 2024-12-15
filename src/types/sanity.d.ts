declare module "@/sanity/sanityFetch" {
  export default function sanityFetch(
    language: string,
    slug?: string
  ): Promise<any>;
}
