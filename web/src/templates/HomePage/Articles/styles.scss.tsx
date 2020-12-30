// Articles Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import Section from '../../../components/Section'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex } from '../../../components/ui'

// ___________________________________________________________________

export const Articles = styled(Section)`
  @media ${theme.mq.tablet} {
  }

  h2,
  h4 {
    text-transform: capitalize;
  }

  .articles {
    &__header {
      align-items: center;
      justify-content: space-between;

      margin-bottom: ${theme.space[6]};
      width: 100%;

      h3 {
        margin-bottom: 0;
      }
    }

    &__aside {
      border-bottom: ${theme.border};
    }

    &__main {
      border-bottom: ${theme.border};
      margin-right: ${theme.space[5]};
    }
  }

  .post {
    margin-bottom: ${theme.space[6]};

    &__figure {
      margin-bottom: ${theme.space[5]};
    }

    &--horizontal {
      border-top: ${theme.border};
      padding-top: ${theme.space[6]};
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
