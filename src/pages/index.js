import React, { useState } from 'react'
import { Box, Flex, Image } from '@chakra-ui/react'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { graphql } from 'gatsby'

import { FadeInWhenVisible } from '../molecules/FadeInWhenVisible'
import { Section } from '../atoms/Section'

const IndexPage = ({ data = {} }) => {
  const { home } = data
  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
    hidden: { opacity: 0 },
  }
  const [logoLoaded, seLogoLoaded] = useState(false)

  return (
    <Box className="container-black" w="100%">
      <Flex w="100%" className="indes-page-container" h="calc(100vh - 115px)">
        <HelmetDatoCms seo={home?.seoMetaTags} />
        <FadeInWhenVisible list={list} threshold={0.2}>
          <Section
            alignItems="center"
            padding="40px 0"
            mandatoryDirection="column"
            maxW="90em"
            justifyContent="center"
            heightBase="100%"
            bgColor="unset"
          >
            <Image
              width="80%"
              visibility={logoLoaded ? 'visible' : 'hidden'}
              objectFit="cover"
              src={'/images/alomejor.svg'}
              alt="Alomejor logo"
              onLoad={() => seLogoLoaded(true)}
              margin="0 auto"
            />
            {logoLoaded && (
              <Box color="white" fontSize="xl" width="80%" p="0 20px">
                <Box as="p" textAlign="right">
                  Jose Luis Checa Alamillos
                </Box>
              </Box>
            )}
          </Section>
        </FadeInWhenVisible>
      </Flex>
    </Box>
  )
}

export default IndexPage

export const query = graphql`
  query HomeQuery {
    home: datoCmsIndexPage {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`
