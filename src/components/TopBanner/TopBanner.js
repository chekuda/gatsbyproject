import React from 'react'
import { Flex, Box, Text, Image } from "@chakra-ui/react"
import { graphql, useStaticQuery } from 'gatsby'

export const TopBanner = () => {
  const data = useStaticQuery(graphql`
  query SocialQuery {
    allDatoCmsSocialProfile {
      nodes {
        id
        url
        profileType
        image {
          url
        }
      }
    }
  }
`)
 const { nodes } = data.allDatoCmsSocialProfile
  return (
    <Flex color='white' justifyContent='space-between' alignItems='center'>
      <Box>
        <Text p='20px 0' fontSize='1rem'>Jose Luis Checa</Text>
      </Box>
      <Flex>
        {
          nodes.map(node => (
            <Box p='0 5px' key={node.id}>
              <Image h='20px' alt={node.profileType} src={node?.image?.url} />
            </Box>
        ))
        }
      </Flex>
    </Flex>
  )
}
