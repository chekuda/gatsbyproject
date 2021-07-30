import React, { Fragment, useMemo } from 'react'
import { Flex, Box } from '@chakra-ui/react'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { graphql, useStaticQuery } from 'gatsby'

import { TopNav } from '../../organisms/TopNav'

import './styles.sass'

export const MainTemplate = ({ children, uri }) => {
  const data = useStaticQuery(graphql`
    query MainTemplate {
      main: datoCmsSite {
        faviconMetaTags {
          id
          tags
        }
      }
    }
  `)
  const isHome = useMemo(() => uri === '/', [uri])
  return (
    <Fragment>
      <HelmetDatoCms favicon={data?.main?.faviconMetaTags} />
      <Box p="0 20px" m="0 auto" bg="black">
        <TopNav uri={uri} isHome={isHome} />
      </Box>
      <Flex overflowY="auto">{children}</Flex>
    </Fragment>
  )
}
