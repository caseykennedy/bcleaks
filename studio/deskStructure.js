import S from '@sanity/desk-tool/structure-builder'
import { MdFiberManualRecord, MdStop, MdSettings } from 'react-icons/md'
import { GoFile } from 'react-icons/go'

import { workflowListItems } from './app/structure/workflow'

export default () =>
  S.list()
    .title('BC Leaks Content')
    .items([
      ...workflowListItems,
      S.divider(),

      // Post
      // _________________________________________________________________

      S.listItem()
        .title('Posts')
        .schemaType('post')
        .child(S.documentTypeList('post').title('Post'))

        .icon(GoFile),

      // Videos
      // _________________________________________________________________

      S.listItem()
        .title('Videos')
        .schemaType('video')
        .child(S.documentTypeList('video').title('Video'))

        .icon(GoFile),
        
      S.divider(),

      // People
      // _________________________________________________________________

      S.listItem()
        .title('People')
        .schemaType('person')
        .child(S.documentTypeList('person').title('People')),

      // Post Category
      // _________________________________________________________________

      S.listItem()
        .title('Post Categories')
        .schemaType('postCategory')
        .child(S.documentTypeList('postCategory').title('Post Category'))

        .icon(MdStop),

      // Settings
      // _________________________________________________________________
      S.listItem()
        .title('Site Settings')
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        )
        .icon(MdSettings),

      // Advertisements
      // _________________________________________________________________

      S.listItem()
        .title('Advertisements')
        .schemaType('advertisement')
        .child(S.documentTypeList('advertisement').title('Post'))

        .icon(MdFiberManualRecord)

      // End
      // _________________________________________________________________
    ])
