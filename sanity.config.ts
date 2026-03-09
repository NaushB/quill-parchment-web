import { defineConfig, defineField, defineType } from "sanity"
import { structureTool } from "sanity/structure"

export default defineConfig({
  name: "default",
  title: "Quill & Parchment CMS",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,

  plugins: [structureTool()],

  schema: {
    types: [
      defineType({
        name: "post",
        title: "Post",
        type: "document",
        fields: [
          defineField({
            name: "title",
            title: "Title",
            type: "string"
          }),
          defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "title" }
          }),
          defineField({
            name: "publishedAt",
            title: "Published At",
            type: "datetime"
          }),
          defineField({
            name: "excerpt",
            title: "Excerpt",
            type: "text"
          }),
          defineField({
            name: "author",
            title: "Author",
            type: "string"
          }),
          defineField({
            name: "body",
            title: "Body",
            type: "array",
            of: [{ type: "block" }]
          })
        ]
      })
    ]
  }
})