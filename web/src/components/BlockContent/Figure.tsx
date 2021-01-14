import React from 'react'
import sanityConfig from '../../../../studio/sanity.json'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'
import Img from 'gatsby-image/withIEPolyfill'
import { buildImageObj } from '../../utils/helpers'
import { imageUrlFor } from '../../utils/image-url'
import { Box } from '../ui'

const Figure = (props: any) => {
  const fluidProps = getFluidGatsbyImage(
    props.asset._ref,
    { maxWidth: 910 },
    sanityConfig.api
  )

  return (
    <Box as="figure" my={6}>
      {props.asset && <Img fluid={fluidProps} alt={props.alt} />}
      <figcaption>{props.caption}</figcaption>
    </Box>
  )
}

export default Figure
