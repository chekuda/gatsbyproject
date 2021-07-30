// NOTE: EVERYTHING THAT CHANGE HERE MUST CHANGE IN gatsby-ssr.js
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
    bgGray: '#202020',
    shadow: '#92909052',
    darkShadow: '#b9b9b9',
    lightGrey: '#e0e0e0',
    brand: '#f7fafc',
    tomato: '#dc2d2a',
    bgDark: '#2F4858',
    blueDark: '#374E77',
    violete: '#634B8A',
    pinkDark: '#9B3B84',
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
