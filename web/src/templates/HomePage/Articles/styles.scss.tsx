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
          padding: ${theme.space[5]} 0;
        }

        .figure {
          background: ${theme.colors.secondary};
          border: ${theme.border};
          width: 100%;
          overflow: hidden;

          transition: border-color ${theme.transition.global};

          &:hover {
            border-color: ${theme.colors.primary};
          }

          /* img {
            transition: ${theme.transition.all};

            &:hover {
              mix-blend-mode: luminosity;
            }
          } */
        }

        &__details {
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          height: auto;
          padding-right: ${theme.space[5]};

          @media ${theme.mq.tablet} {
            padding-right: 0;
            padding-left: ${theme.space[5]};
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

export const PillBox = styled(Flex)`
  display: flex;
  margin-bottom: ${theme.space[4]};

  div {
    display: flex;
    align-items: center;
    border: ${theme.border};
    border-radius: ${theme.borderRadius};
    margin-right: ${theme.space[2]};
    padding: ${theme.space[1]} ${theme.space[2]};

    span {
      color: ${theme.colors.primary};
      font-size: ${theme.fontSizes[0]};
    }
  }
`
