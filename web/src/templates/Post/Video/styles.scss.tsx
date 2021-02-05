// Video Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import Section from '../../../components/Section'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex } from '../../../components/ui'

// ___________________________________________________________________

export const Video = styled.div`
  background: ${theme.colors.black};

  .swiper-container {
    overflow: visible;
    padding-bottom: ${theme.space[7]};
  }

  img {
    background: ${theme.colors.white};
  }

  .utilities {
    @media ${theme.mq.tablet} {
      position: sticky;
      top: calc(${theme.headerHeight} + ${theme.space[5]});
    }
  }
`

export const PageTitle = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${theme.colors.black};
  /* height: ${theme.tickerHeight}; */
  width: 100%;

  @media ${theme.mq.tablet} {
  }

  .pillbox {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;

    border-left: ${theme.border};
    margin-left: ${theme.space[4]};
    padding: ${theme.space[2]} 0 ${theme.space[2]} ${theme.space[2]};
    width: 100%;

    @media ${theme.mq.tablet} {
      padding: ${theme.space[3]} 0 ${theme.space[3]} ${theme.space[3]};
    }
  }
`
