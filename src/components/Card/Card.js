import React from "react"

import {
  Box,
  Image,
} from "@chakra-ui/react"

export const Card = ({ id, image, title, cursorMode = 'auto'}) => {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius='8px'
      overflow="hidden"
      boxShadow="5px 5px #8080801c"
      m="3"
      bg="white"
    >
      <Image
        src={image}
        alt={title}
        loading='lazy'
        width={{ base: '14em', md: '12em', xl: '14em' }}
        height='16rem'
        objectFit='cover'
        cursor='pointer'
      />
    </Box>
  )
}
