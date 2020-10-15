// Articles Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import Section from '../../Section'
import theme from '../../../../config/theme'
import { Box, Flex } from '../../ui'

// ___________________________________________________________________

export const Articles = styled(Section)`
  @media ${theme.mq.tablet} {
  }

  h2,
  h4 {
    text-transform: uppercase;
  }

  .articles {
    &__header {
      display: flex;
      justify-content: space-between;

      margin-bottom: ${theme.space[6]};
      width: 100%;
    }
  }

  .post {
    margin-bottom: ${theme.space[6]};

    &__figure {
      margin-bottom: ${theme.space[5]};
    }
  }
`

export const Author = styled(Flex)`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  @media ${theme.mq.tablet} {
  }

  .author {
    &__img {
      display: block;
      width: 100%;
      max-width: 48px;
      border-radius: 100rem;
    }
    &__name {

      span {
      }
    }
  }
`