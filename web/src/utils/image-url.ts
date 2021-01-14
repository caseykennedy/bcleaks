import sanityConfig from '../../../studio/sanity.json'
import imageUrlBuilder from '@sanity/image-url'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'

const builder = getFluidGatsbyImage(sanityConfig.api)

export function imageUrlFor (source: any) {
  return builder.image(source)
}
