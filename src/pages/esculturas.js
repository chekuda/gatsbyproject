import React from 'react'
import { graphql } from 'gatsby'
import { Flex } from "@chakra-ui/react"
import { SRLWrapper } from "simple-react-lightbox"

import { Card } from '../components/Card/Card'

const Esculturas = ({ data }) => {
  const { allDatoCmsEscultura } = data || {}
  return (
    <SRLWrapper>
      <Flex flexWrap="wrap" justifyContent='center'>
          {
            allDatoCmsEscultura.edges.map(({ node }) =>
              <Card
                cursorMode='zoom-in'
                key={node.id}
                title={node.title}
                id={node.id}
                image={node?.coverImage?.fluid?.src}
              />)
          }
      </Flex>
    </SRLWrapper>
  )
}

export default Esculturas

export const query = graphql`
  query EscultureQuery {
    allDatoCmsEscultura {
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
