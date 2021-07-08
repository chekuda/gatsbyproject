import React from 'react'
import { Flex, Box, Text, Image } from "@chakra-ui/react"
import { graphql, useStaticQuery } from 'gatsby'

const TopBanner = () => {
  const data = useStaticQuery(graphql`
  query SocialQuery {
    allDatoCmsSocialProfile {
      nodes {
        id
        url
        image {
          url
          title
        }
      }
    }
  }
`)
 const { nodes } = data.allDatoCmsSocialProfile
 const uniqueNodes = nodes.filter(node => !!node.image.title)
  return (
    <Flex color='white' justifyContent='space-between' alignItems='center'>
      <Box>
        <Text p='20px 0' fontSize='1rem'>Jose Luis Checa</Text>
      </Box>
      <Flex>
        {
          uniqueNodes.map(node => (
          <Box p='0 5px' key={node.id}>
            <Image h='20px' src={node.image.url} />
          </Box>
        ))
        }
      </Flex>
    </Flex>
  )
}

export default TopBanner