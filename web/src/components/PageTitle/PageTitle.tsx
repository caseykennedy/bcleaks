// PageTitle Section:

// ___________________________________________________________________

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'
import { useSpring, config } from 'react-spring'
import { Parallax } from 'react-scroll-parallax'

import ImgMatch from '../ImgMatch'

import * as S from './styles.scss'
import { Box, Flex, Heading, Text, AnimatedBox } from '../ui'
import theme from '../../gatsby-plugin-theme-ui'

// ___________________________________________________________________

type Props = {
  altText?: string
  border?: boolean
  image?: object
  message: string
  title?: string
}

const PageTitle: React.FC<Props> = ({ altText, border, image, message, title }) => {
  const fadeAnimation = useSpring({
    config: config.molasses,
    delay: 260,
    from: { opacity: 0, transform: theme.transform.matrix.from },
    to: { opacity: 1, transform: theme.transform.matrix.to }
  })
  return (
    <>
      <S.PageTitle image={image}>
        {/* <S.Sideboard>
          <Heading as="h5">Orthopaedic Implant Co.</Heading>
        </S.Sideboard> */}

        <S.Billboard border={border}>
          <AnimatedBox style={fadeAnimation}>
            <Heading as="h5" color="tertiary">
              {title}
            </Heading>

            <Heading
              as="h1"
              mb={0}
              dangerouslySetInnerHTML={{ __html: message }}
            />
          </AnimatedBox>
        </S.Billboard>
      </S.PageTitle>

      <Parallax y={[25, 10]}>
        <S.Figure>
          {image && (
            <Img
              fluid={image}
              objectFit="cover"
              objectPosition="50% 50%"
              alt={altText}
            />
          )}
        </S.Figure>
      </Parallax>
    </>
  )
}

export default PageTitle
