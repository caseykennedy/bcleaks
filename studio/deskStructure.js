import S from "@sanity/desk-tool/structure-builder";
import { MdAssignment, MdStop, MdSettings, MdViewDay, MdFolder } from "react-icons/md";
import { GoFile } from "react-icons/go";

const hiddenTypes = [
  "category",
  "companyInfo",
  "page",
  "person",
  "post",
  "project",
  "siteSettings"
];

export default () =>
  S.list()
    .title("BC Leaks Content")
    .items([
      // Settings
      // _________________________________________________________________
      S.listItem()
        .title("Site Settings")
        .child(
          S.editor()
            .id("siteSettings")
            .schemaType("siteSettings")
            .documentId("siteSettings")
        )
        .icon(MdSettings),

      // People
      // _________________________________________________________________

      S.listItem()
        .title("People")
        .schemaType("person")
        .child(S.documentTypeList("person").title("People")),

      // Post Category
      // _________________________________________________________________

      S.listItem()
        .title("Post Categories")
        .schemaType("postCategory")
        .child(S.documentTypeList("postCategory").title("Post Category"))

        .icon(MdStop),

      // Post
      // _________________________________________________________________

      S.listItem()
        .title("Posts")
        .schemaType("post")
        .child(S.documentTypeList("post").title("Post"))

        .icon(GoFile),

      // Videos
      // _________________________________________________________________

      S.listItem()
        .title("Videos")
        .schemaType("video")
        .child(S.documentTypeList("video").title("Video"))

        .icon(GoFile)

      // End
      // _________________________________________________________________
    ]);
