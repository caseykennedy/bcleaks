// Articles Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import Section from '../../../components/Section'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex } from '../../../components/ui'

// ___________________________________________________________________

export const Articles = styled(Box)`
  border-top: ${theme.border};

  .articles {
    &__header {
      align-items: center;
      justify-content: space-between;
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
          padding: ${theme.space[5]} 0;
        }

        .figure {
          background: ${theme.colors.secondary};
          border: ${theme.border};
          border-color: transparent;
          border-radius: ${theme.borderRadius};
          width: 100%;
          overflow: hidden;

          transition: border-color ${theme.transition.global};

          &:hover {
            border-color: ${theme.colors.primary};
          }
        }

        &__details {
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          height: auto;
          padding-right: ${theme.space[3]};

          @media ${theme.mq.tablet} {
            padding-right: ${theme.space[5]};
          }

          .title {
            font-size: ${theme.fontSizes[2]};

            @media ${theme.mq.tablet} {
              font-size: ${theme.fontSizes[3]};
            }
          }
        }

        &--horizontal {
        }
      }
    }
  }
`
