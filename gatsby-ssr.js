// NOTE: EVERYTHING THAT CHANGE HERE MUST CHANGE IN gatsby-browser.js
import React from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import SimpleReactLightbox from 'simple-react-lightbox'

import { MainTemplate } from './src/templates/MainTemplate'
import '@fontsource/roboto/400.css'

export const breakpoints = createBreakpoints({
  sm: '30em',
  md: '48em',
  lg: '64em',
  xl: '80em',
  '2xl': '96em',
})

export const theme = extendTheme({
  fonts: {
    body: 'Roboto',
    heading: 'Roboto',
  },
  myColors: {
    dark: '#0f0f10',
    shadow: '#9290901c',
    darkShadow: '#b9b9b9',
    lightGrey: '#e0e0e0',
    brand: '#f7fafc',
  },
  breakpoints,
})

export const wrapRootElement = ({ element }) => {
  return (
    <ChakraProvider theme={theme}>
      <SimpleReactLightbox>{element}</SimpleReactLightbox>
    </ChakraProvider>
  )
}

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <MainTemplate {...props}>{element}</MainTemplate>
}