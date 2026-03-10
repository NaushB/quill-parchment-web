import { createClient } from "@sanity/client";

export const sanity = createClient({
  projectId: "jg8ej8xn",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

export async function getPosts() {
  return sanity.fetch(`
    *[_type=="post"] | order(publishedAt desc){
      title, slug, publishedAt, excerpt, author
    }
  `);
}

export async function getPost(slug: string) {
  return sanity.fetch(
    `*[_type=="post" && slug.current==$slug][0]{
      title, publishedAt, body, author, excerpt
    }`,
    { slug }
  );
}
