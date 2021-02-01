// Layout:

// ___________________________________________________________________

import React, { useRef } from 'react'

// Providers
import ContextProvider from '../../provider/ContextProvider'
import { ThemeProvider } from 'styled-components'
import { ParallaxProvider } from 'react-scroll-parallax'

// Components
import Header from '../Header'
import Footer from '../Footer'
import CryptoTicker from '../CryptoTicker'

// Styles + Theme
import theme from '../../gatsby-plugin-theme-ui'
import GlobalStyles from '../../styles/global'
import * as S from './styles.scss'
import 'swiper/css/swiper.css'
import 'react-responsive-modal/styles.css'

// ___________________________________________________________________

export type LayoutProps = {
  children: React.ReactNode
  isShowing?: boolean
  toggleOverlay?: () => void
  location?: {
    pathname: string
  }
  // mainRef: React.RefObject<HTMLDivElement>
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Ref <main> to lock body for modal/overlay
  const mainRef = useRef<HTMLDivElement>(null)

  // eslint-disable-next-line no-console
  console.log(
    `%c BC Leaks — crafted with care. [ caseykennedy.hns.to ] `,
    `background: #2cc48a; color: #000000`
  )
  return (
    <ContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ParallaxProvider>
          <S.Wrapper>
            <Header mainRef={mainRef} />
            <CryptoTicker />
            <S.Main ref={mainRef}>{children}</S.Main>
            <Footer />
          </S.Wrapper>
        </ParallaxProvider>
      </ThemeProvider>
    </ContextProvider>
  )
}

export default Layout

// ___________________________________________________________________

export const withLayout = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) =>
  class WithLayout extends React.Component<P & LayoutProps> {
    render() {
      return (
        <Layout location={this.props.location}>
          <WrappedComponent {...this.props} />
        </Layout>
      )
    }
  }
