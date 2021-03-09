declare module '*.svg'
declare module '*.eot'
declare module '*.ttf'
declare module '*.otf'
declare module '*.woff'
declare module '*.woff2'

declare module 'gatsby-image/withIEPolyfill'
declare module 'react-anchor-link-smooth-scroll'
declare module '@sanity/block-content-to-react'
declare module 'react-id-swiper'
declare module 'react-responsive-embed'
declare module 'coingecko-api'
declare module 'gatsby-source-sanity'

function createRef<T>(): RefObject<T>
interface RefObject<T> {
  // immutable
  readonly current: T | null
}