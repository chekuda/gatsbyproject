import React, { useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { Box, Image, useTheme } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const cardAnimation = {
  hover: {
    scale: 1.05,
    transition: 'transform ease-out 0.3s',
  },
  normal: {
    scale: 1,
  },
}

const titleAnimation = {
  hover: {
    y: -45,
    transition: 'transform ease-out 0.3s',
  },
  normal: {
    y: 0,
  },
}

export const Card = ({
  image,
  title,
  cursorMode = 'auto',
  width,
  height = '16rem',
  withAnimation = true,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const theme = useTheme()
  return (
    <motion.div whileHover="hover" variants={withAnimation ? cardAnimation : {}} initial="normal">
      <Box
        maxW="sm"
        overflow="hidden"
        boxShadow={`4px 6px 9px 5px ${theme?.myColors?.shadow}`}
        m="3"
        bg="white"
        position="relative"
      >
        {!imageLoaded && <Skeleton width={width} height={height} />}
        <Image
          src={image}
          alt={title}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
          width={width}
          height={!imageLoaded ? 0 : height}
          objectFit="cover"
          cursor={cursorMode}
          visibility={!imageLoaded ? 'hidden' : 'visible'}
        />
        <motion.div variants={withAnimation ? titleAnimation : {}}>
          <Box
            pos="absolute"
            bottom={-45}
            background={theme?.myColors?.shadow}
            w="100%"
            p="10px"
            opacity={0.9}
            h="45px"
          >
            <Box as="p" fontWeight="bold">
              {title}
            </Box>
          </Box>
        </motion.div>
      </Box>
    </motion.div>
  )
}
