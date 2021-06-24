// Category Nav Component:

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

// Theme + ui
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Box } from '../ui'

// ___________________________________________________________________

type Props = {
  figure: {
    alt: string
    asset: {
      fluid: ImageShape
    }
    caption?: string
  }
  url: string
}

const AdSpace: React.FC<Props> = ({ figure, url }) => {
  return (
    <Box>
      <Link to={url} className="featured__image">
        <Img
          fluid={figure.asset.fluid}
          objectFit="cover"
          objectPosition="50% 50%"
          altText={figure.alt}
        />
      </Link>
    </Box>
  )
}

export default AdSpace
