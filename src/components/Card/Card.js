import React, { useState } from "react"
import Skeleton from 'react-loading-skeleton'
import {
  Box,
  Image,
} from "@chakra-ui/react"

export const Card = ({ image, title, cursorMode = 'auto', width, height = '16rem' }) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  return (
    <Box
      maxW="sm"
      borderRadius='8px'
      overflow="hidden"
      boxShadow="5px 5px #9290907a"
      m="3"
      bg="white"
    >
      {!imageLoaded && <Skeleton width={width} height={height} />}
      <Image
        src={image}
        alt={title}
        onLoad={() => setImageLoaded(true)}
        loading='lazy'
        width={width}
        height={!imageLoaded ? 0 : height}
        objectFit='cover'
        cursor={cursorMode}
        visibility={!imageLoaded ? 'hidden' : 'visible'}
      />
    </Box>
  )
}
