// Page Title Component:

// ___________________________________________________________________

import React from 'react'

// Theme + ui
import * as S from './styles.scss'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex, Heading } from 'theme-ui'

// ___________________________________________________________________

type Props = {
  tags?: any
  title: string
}

const PageTitle: React.FC<Props> = ({ tags, title }) => {
  return (
    <S.PageTitle py={[2, 3]} px={theme.gutter.axis}>
      <Heading as="h4" color="white" mb={0} className="text--uppercase">
        {title}
      </Heading>

      {/* {tags && (
        <Flex className="pillbox">
          {tags.slice(0, 3).map((item, idx) => (
            <Pill my={[1, 2]} key={idx}>
              <span>#{item.tag}</span>
            </Pill>
          ))}
        </Flex>
      )} */}
    </S.PageTitle>
  )
}

export default PageTitle
