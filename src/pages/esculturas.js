import React from 'react'
import { graphql } from 'gatsby'
import { Flex } from "@chakra-ui/react"

import { Card } from '../components/Card/Card'

const Esculturas = ({ data }) => {
  const { allDatoCmsEscultura } = data || {}
  return <Flex flexWrap="wrap" justifyContent='center'>
    {console.log('allDatoCmsEscultura.edges', allDatoCmsEscultura.edges)}
    {
      allDatoCmsEscultura.edges.map(({ node }) => <Card key={node.id} title={node.title} id={node.id} image={node?.coverImage?.fluid?.src}/>)
    }
  </Flex>
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
