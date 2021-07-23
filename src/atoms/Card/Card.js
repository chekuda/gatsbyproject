import React, { useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { Box, Image, useTheme } from '@chakra-ui/react'

export const Card = ({ image, title, cursorMode = 'auto', width, height = '16rem' }) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const theme = useTheme()
  return (
    <Box
      maxW="sm"
      overflow="hidden"
      boxShadow={`4px 6px 9px 5px ${theme?.myColors?.shadow}`}
      m="3"
      bg="white"
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
    </Box>
  )
}
