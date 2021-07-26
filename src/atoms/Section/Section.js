import React from 'react'
import { motion } from 'framer-motion'
import { Flex, Box, Image, Heading, Text, useBreakpointValue } from '@chakra-ui/react'

const SectionImage = ({ image }) => {
  return <Image width={image.width} objectFit="cover" src={image.src} alt={image.alt} />
}

export const Section = ({
  itemAnimation,
  heading,
  content,
  image,
  height = 'calc(100vh - 115px)',
  padding,
}) => {
  const breakPoints = useBreakpointValue({
    base: {
      height: 'auto',
      direction: 'column',
    },
    md: {
      height,
      direction: 'row',
    },
  })

  return (
    <Flex
      as="section"
      p={padding || 0}
      alignItems="center"
      w="100%"
      h={breakPoints?.height}
      flexDirection={breakPoints?.direction}
    >
      <Box flex="1" justifyContent="center">
        <motion.div variants={itemAnimation}>
          <Heading as="h1" size="4xl" paddingBottom="20px">
            {heading}
          </Heading>
        </motion.div>
        <motion.div variants={itemAnimation}>
          <Text as={'p'} p="20px 50px 0 0" lineHeight="2rem">
            {content}
          </Text>
        </motion.div>
      </Box>
      {image && (
        <motion.div variants={itemAnimation}>
          <Box justifyContent="center">
            <SectionImage image={image} />
          </Box>
        </motion.div>
      )}
    </Flex>
  )
}
