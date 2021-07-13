import React from 'react'
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { Flex, useBreakpointValue } from '@chakra-ui/react'
import { SRLWrapper } from 'simple-react-lightbox'

import { Card } from '../components/Card'

const Esculturas = ({ data }) => {
  const cardWidth = useBreakpointValue({ base: '14em', md: '12em', xl: '14em' })
  const { esculturas, pageInfo } = data || {}
  return (
    <>
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
    </>
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
