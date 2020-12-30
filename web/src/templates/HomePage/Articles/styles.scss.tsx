// Articles Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import Section from '../../../components/Section'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex } from '../../../components/ui'

// ___________________________________________________________________

export const Articles = styled(Section)`
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

    &__main {
      .post {
        display: flex;
        flex-direction: row-reverse;
        border-top: ${theme.border};
        padding: ${theme.space[4]} 0;

        @media ${theme.mq.tablet} {
          flex-direction: row;
        }

        &__figure {
          img {
            
          }
        }

        &__details {
          padding-right: ${theme.space[5]};

          @media ${theme.mq.tablet} {
            padding-right: 0;
            padding-left: ${theme.space[5]};
            max-height: 150px;
          }
        }

        &--horizontal {
        }
      }
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
