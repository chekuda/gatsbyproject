import React, { Fragment } from 'react'
import { motion } from 'framer-motion'
import { Flex, Box, Image, Heading, Text, useBreakpointValue } from '@chakra-ui/react'

import { bottomPseudo, topPseudo } from './constans'

const SectionImage = ({ image, imageMaxW, imageMaxH }) => {
  return (
    <Image
      maxW={imageMaxW}
      maxH={imageMaxH}
      width={image.width}
      objectFit="cover"
      src={image.url}
      alt={image.title}
      borderRadius="5px"
    />
  )
}

export const SectionInfoLayout = ({
  title,
  titleSize,
  titlePadding,
  image,
  itemAnimation,
  content,
  contentSize,
  imageMaxW,
  imageMaxH,
  textAlign = 'auto',
}) => {
  return (
    <Fragment>
      <Box flex="1" justifyContent="center" overflow="hidden" textAlign={textAlign}>
        <motion.div variants={itemAnimation}>
          <Heading as="h1" size={titleSize} p={titlePadding}>
            {title}
          </Heading>
        </motion.div>
        <motion.div variants={itemAnimation}>
          {typeof content === 'string' ? (
            <Text as={'p'} p="20px 20px 20px 0" lineHeight="2rem" fontSize={contentSize}>
              {content?.html.replace(/\n/g, '<br />')}
            </Text>
          ) : (
            <Box
              p="20px 20px 20px 0"
              fontSize={contentSize}
              dangerouslySetInnerHTML={{ __html: content?.html.replace(/\n/g, '<br />') }}
            />
          )}
        </motion.div>
      </Box>
      {image && (
        <motion.div variants={itemAnimation}>
          <Box justifyContent="center">
            <SectionImage image={image} imageMaxW={imageMaxW} imageMaxH={imageMaxH} />
          </Box>
        </motion.div>
      )}
    </Fragment>
  )
}

export const Section = ({
  maxH,
  height = 'calc(100vh - 115px)',
  width = '100%',
  maxW,
  padding = '20px 0',
  withPseudo,
  isBeforePseudo,
  isAfterPseudo,
  overflow = 'unset',
  boxShadow,
  rounded = 0,
  mandatoryDirection,
  alignItems = 'top',
  children,
  bgColor = 'white',
  justifyContent = 'unset',
  heightBase = 'unset',
}) => {
  const breakPoints = useBreakpointValue({
    base: {
      height: heightBase,
      direction: 'column',
    },
    md: {
      height,
      direction: 'row',
    },
  })

  return (
    <Flex
      bgColor={bgColor}
      as="section"
      p={padding}
      boxSizing="border-box"
      alignItems={alignItems}
      h={breakPoints?.height}
      flexDirection={mandatoryDirection || breakPoints?.direction}
      w={width}
      maxW={maxW}
      margin="0 auto"
      _before={{ ...(withPseudo && isBeforePseudo && { ...topPseudo }) }}
      _after={{ ...(withPseudo && isAfterPseudo && { ...bottomPseudo }) }}
      overflow={overflow}
      maxH={maxH}
      rounded={rounded}
      boxShadow={boxShadow}
      justifyContent={justifyContent}
    >
      {children}
    </Flex>
  )
}
