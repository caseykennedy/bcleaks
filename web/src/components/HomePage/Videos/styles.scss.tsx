// Videos Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import Section from '../../Section'
import theme from '../../../../config/theme'
import { Box, Flex } from '../../ui'

// ___________________________________________________________________

export const Videos = styled(Section)`
  .videos {
    &__header {
      display: flex;
      justify-content: space-between;

      margin-bottom: ${theme.space[6]};
      width: 100%;
    }

    &__posts {
      .post {
        .video {
          background: ${theme.colors.secondary};
          border: ${theme.border};
          margin-bottom: ${theme.space[6]};
          height: ${theme.space[11]};
          width: 100%;
        }

        .lead {
          font-size: calc(${theme.fontSizes[3]} / 1);
          text-transform: uppercase;

          @media ${theme.mq.tablet} {
            font-size: calc(${theme.fontSizes[3]} / 1.25);
          }
        }
      }
    }
  }
`
