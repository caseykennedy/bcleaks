// Post Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import Section from '../../../components/Section'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex } from '../../../components/ui'

// ___________________________________________________________________

export const Article = styled.div`
  background: ${theme.colors.black};

  .swiper-container {
    overflow: visible;
    padding-bottom: ${theme.space[7]};
  }
`

export const PageTitle = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${theme.colors.black};
  height: ${theme.tickerHeight};
  width: 100%;

  @media ${theme.mq.tablet} {
  }
`

export const Source = styled(Box)`
  flex: 1;
  width: 100%;
  margin-bottom: ${theme.space[5]};

  &:last-child {
    margin-right: 0;
    margin-bottom: 0;
  }

  @media ${theme.mq.tablet} {
    max-width: 50%;
    margin-right: ${theme.space[5]};
  }

  @media ${theme.mq.desktop} {
    max-width: 25%;
  }

  &:hover {
    .title {
      color: ${theme.colors.primary};

      span {
        bottom: ${theme.space[2]};

        svg {
          /* fill: ${theme.colors.white}; */
        }
      }
    }

    .url {
      color: ${theme.colors.white};
    }
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${theme.colors.lightgray};
    text-transform: uppercase;
    width: 100%;

    &:hover {
      color: ${theme.colors.primary};
    }

    span {
      position: relative;
      bottom: 0;

      transition: ${theme.transition.all};

      svg {
        fill: ${theme.colors.primary};
      }
    }
  }

  .url {
    color: ${theme.colors.gray};
  }
`
