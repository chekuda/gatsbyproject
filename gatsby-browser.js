import React from 'react'
import { ChakraProvider, extendTheme} from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"
import SimpleReactLightbox from 'simple-react-lightbox'

import { HorizontalLayout } from './src/layout/HorizontalLayout'
import "@fontsource/roboto/400.css"

const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "64em",
  xl: "80em",
  "2xl": "96em",
})

const theme = extendTheme({
  fonts: {
    body: "Roboto",
    heading: "Roboto",
  },
  colors: {
    dark: {
      300: '#0f0f10'
    }
  },
  breakpoints
})

export const wrapRootElement = ({ element }) => {
  return (
    <ChakraProvider theme={theme}>
      <SimpleReactLightbox>
        {element}
      </SimpleReactLightbox>
    </ChakraProvider>
  )
}

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <HorizontalLayout {...props}>{element}</HorizontalLayout>
}