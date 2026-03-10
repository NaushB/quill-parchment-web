import { defineConfig, defineField, defineType } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";

export default defineConfig({
  name: "default",
  title: "Quill & Parchment",
  projectId: "jg8ej8xn",
  dataset: "production",
  plugins: [structureTool(), visionTool()],
  schema: {
    types: [
      defineType({
        name: "post",
        title: "Blog Post",
        type: "document",
        fields: [
          defineField({ name: "title", title: "Title", type: "string" }),
          defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" } }),
          defineField({ name: "publishedAt", title: "Published At", type: "datetime" }),
          defineField({ name: "excerpt", title: "Excerpt", type: "text" }),
          defineField({ name: "author", title: "Author", type: "string" }),
          defineField({ name: "body", title: "Body", type: "array", of: [{ type: "block" }] }),
        ],
      }),
    ],
  },
});
