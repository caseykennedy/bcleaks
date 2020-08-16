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

      // Home page
      // _________________________________________________________________

     

      

      // End
      // _________________________________________________________________
    ]);
