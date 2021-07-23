import React from 'react'
import { Flex, Box } from '@chakra-ui/react'

import { TopNav } from '../../molecules/TopNav'

export const MainTemplate = ({ children, uri }) => {
  return (
    <Box>
      <Box bg="black">
        <Box w="80%" maxW={1024} m="0 auto">
          <TopNav uri={uri} />
        </Box>
      </Box>
      <Flex w="80%" maxW={1024} m="0 auto" p="20px 0" overflowY="auto">
        {children}
      </Flex>
    </Box>
  )
}
