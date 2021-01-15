// Source Section:

// ___________________________________________________________________

import React from 'react'
import * as S from './styles.scss'
import { Heading, Text } from '../ui'
import theme from '../../gatsby-plugin-theme-ui'
import Icon from '../Icons'

// ___________________________________________________________________

type SourceShape = {
  source: {
    title: string
    url: string
  }
}

const Source: React.FC<SourceShape> = ({ source }) => {
  return (
    <S.Source as="a" href={source.url} target="_blank">
      <Heading as="h5" className="title">
        <div>{source.title}</div>
        <Icon name="external-link" />
      </Heading>
      <Text className="url">{source.url}</Text>
    </S.Source>
  )
}

export default Source
