// gatsby-ssr

import React from 'react'
import { client } from './src/client'
import Layout from './src/components/Layout'

// Styles + Theme
import theme from './src/gatsby-plugin-theme-ui'
import GlobalStyles from './src/styles/global'

// Providers
import ContextProvider from './src/provider/ContextProvider'
import { ThemeProvider } from 'styled-components'
import { ApolloProvider } from '@apollo/react-hooks'

// ___________________________________________________________________

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return (
    <>
      <GlobalStyles />
      <Layout {...props}>{element ? element : 'loading...'}</Layout>
    </>
  )
}

export const wrapRootElement = ({ element }) => {
  return (
    <ContextProvider>
      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>{element}</ApolloProvider>
      </ThemeProvider>
    </ContextProvider>
  )
}
