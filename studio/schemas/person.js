import { MdPerson } from "react-icons/md";

export default {
  name: "person",
  title: "Person",
  type: "document",
  icon: MdPerson,
  liveEdit: false,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string"
    },
    {
      name: "role",
      title: "Role",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [{ title: "Admin", value: "admin" }, { title: "Author", value: "author" }]
      }
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Some frontend will require a slug to be set to be able to show the person",
      options: {
        source: "name",
        maxLength: 96
      }
    },
    {
      name: "avatar",
      title: "Avatar",
      type: "image",
      options: {
        hotspot: true
      }
    }
  ],
  preview: {
    select: {
      title: "name",
      media: "avatar"
    }
  }
};
