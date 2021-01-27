export default {
  name: "tag",
  title: "Tag",
  type: "object",
  fields: [{ name: "tag", type: "string", title: "Tag name" }],
  // validation: Rule => Rule.max(20).warning(`A tag shouldn't exceed 20 characters.`)
};
