import { MdApps } from 'react-icons/md'

export default {
  name: 'postCategory',
  title: 'Post Category',
  type: 'document',
  icon: MdApps,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description:
        'Some frontend will require a slug to be set to be able to show the post',
      options: {
        source: 'title'
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    }
  ]
}
