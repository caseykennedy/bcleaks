import BaseBlockContent from '@sanity/block-content-to-react'
import React from 'react'
import Img from 'gatsby-image/withIEPolyfill'
import theme from '../../gatsby-plugin-theme-ui'
import { Heading, Text } from '../ui'

import Figure from './Figure'

type BlockShape = {
  blocks: any
}

const serializers = {
  types: {
    block(props: any) {
      switch (props.node.style) {
        case 'h1':
          return (
            <Heading as="h1" color="white">
              {props.children}
            </Heading>
          )

        case 'h2':
          return (
            <Heading as="h2" color="white" mt={4}>
              {props.children}
            </Heading>
          )

        case 'h3':
          return (
            <Heading as="h3" color="white" mt={4}>
              {props.children}
            </Heading>
          )

        case 'h4':
          return (
            <Heading as="h4" color="white" mt={4}>
              {props.children}
            </Heading>
          )

        case 'blockquote':
          return <blockquote>{props.children}</blockquote>

        case 'a':
          return (
            <a rel="noopener" target="_blank">
              {props.children}
            </a>
          )

        case 'ul':
          return <ul>{props.children}</ul>

        case 'li':
          return <li>{props.children}</li>

        default:
          return <Text as="p">{props.children}</Text>
      }
    },
    figure(props: any) {
      return <Figure {...props.node} />
    }
  }
}

const BlockContent: React.FC<BlockShape> = ({ blocks }) => (
  <BaseBlockContent blocks={blocks} serializers={serializers} />
)

export default BlockContent
