export default {
  name: "video",
  title: "Video Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Some frontend will require a slug to be set to be able to show the post",
      options: {
        source: "title",
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: "publishedAt",
      title: "Published at",
      description: "You can use this field to schedule post where you show them",
      type: "datetime",
      validation: Rule => Rule.required()
    },
    {
      name: "authors",
      title: "Authors",
      type: "reference",
      to: [{ type: "person" }],
      validation: Rule => Rule.required()
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "postCategory" } }],
      validation: Rule => Rule.required()
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [
        {
          type: "tag"
        }
      ]
    },
    {
      name: "figure",
      title: "Figure",
      type: "figure",
      validation: Rule => Rule.required()
    },
    {
      name: "videoUrl",
      title: "Video URL",
      type: "url",
      validation: Rule => Rule.required()
    },
    {
      name: "body",
      title: "Description",
      type: "blockContent"
    },
    {
      name: "sources",
      title: "Sources",
      type: "array",
      of: [
        {
          type: "source"
        }
      ]
    }
  ],
  orderings: [
    {
      title: "Publishing date new–>old",
      name: "publishingDateAsc",
      by: [{ field: "publishedAt", direction: "asc" }, { field: "title", direction: "asc" }]
    },
    {
      title: "Publishing date old->new",
      name: "publishingDateDesc",
      by: [{ field: "publishedAt", direction: "desc" }, { field: "title", direction: "asc" }]
    }
  ],
  preview: {
    select: {
      title: "title",
      publishedAt: "publishedAt",
      image: "figure"
    },
    prepare({ title = "No title", publishedAt, image }) {
      return {
        title,
        subtitle: publishedAt
          ? new Date(publishedAt).toLocaleDateString()
          : "Missing publishing date",
        media: image
      };
    }
  }
};
