import React from 'react'
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { Flex, useBreakpointValue, Box } from '@chakra-ui/react'
import { SRLWrapper } from 'simple-react-lightbox'

import { Card } from '../atoms/Card'

const Esculturas = ({ data }) => {
  const cardWidth = useBreakpointValue({ base: '14em', md: '12em', xl: '14em' })
  const { esculturas, pageInfo } = data || {}
  return (
    <Box margin="0 auto">
      <HelmetDatoCms seo={pageInfo.seoMetaTags} />
      <SRLWrapper>
        <Flex flexWrap="wrap" justifyContent="center">
          {esculturas.edges.map(({ node }) => (
            <Card
              cursorMode="zoom-in"
              key={node.id}
              title={node.title}
              id={node.id}
              image={node?.coverImage?.fluid?.src}
              width={cardWidth}
              height="16rem"
            />
          ))}
        </Flex>
      </SRLWrapper>
    </Box>
  )
}

export default Esculturas

export const query = graphql`
  query EscultureQuery {
    pageInfo: datoCmsEsculturaPage {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    esculturas: allDatoCmsEscultura {
      edges {
        node {
          id
          title
          slug
          excerpt
          coverImage {
            fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
  }
`
