// useAdvertisement hook

// ___________________________________________________________________

import { graphql, useStaticQuery } from 'gatsby'

// ___________________________________________________________________

type Props = {
  ads: {
    nodes: {
      id: string
      figure: {
        alt: string
        asset: {
          altText: string
          fluid: ImageShape
        }
        caption: string
      }
      size: string
      slug: {
        current: string
      }
      title: string
    }[]
  }
}

const useAdvertisement = () => {
  const data = useStaticQuery<Props>(graphql`
    query AdvertisementQuery {
      ads: allSanityAdvertisement {
        nodes {
          id
          figure {
            alt
            asset {
              altText
              fluid {
                aspectRatio
                base64
                sizes
                src
                srcSet
                srcSetWebp
                srcWebp
              }
            }
            caption
          }
          size
          slug {
            current
          }
          title
        }
      }
    }
  `)

  return data.ads.nodes
}

export default useAdvertisement
