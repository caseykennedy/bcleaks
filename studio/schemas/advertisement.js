import { MdFiberManualRecord } from 'react-icons/md'

export default {
  name: 'advertisement',
  title: 'Advertisement',
  type: 'document',
  icon: MdFiberManualRecord,
  liveEdit: false,
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
      description: 'URL for reference',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'size',
      title: 'Size',
      type: 'string',
      options: {
        list: [
          { title: 'Small Square (200 x 200)', value: 'smallSquare' },
          { title: 'Square (250 x 250)', value: 'square' },
          { title: 'Banner (468 x 60)', value: 'banner' },
          { title: 'Leaderboard (728 x 90)', value: 'leaderboard' },
          { title: 'Large Leaderboard (970 x 90)', value: 'largeLeaderboard' },
          { title: 'Inline Rectangle (300 x 250)', value: 'inlineRectangle' },
          { title: 'Large Rectangle (336 x 280)', value: 'largeRectangle' },
          { title: 'Skyscraper (120 x 600)', value: 'skyscraper' },
          { title: 'Wide Skyscraper (160 x 600)', value: 'wideSkyscraper' },
          { title: 'Half-page (300 x 600)', value: 'halfpage' },
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'figure',
      title: 'Figure',
      type: 'figure',
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      image: 'figure'
    },
    prepare({ title = 'No title', size, image }) {
      return {
        title,
        subtitle: size,
        media: image
      }
    }
  }
}
