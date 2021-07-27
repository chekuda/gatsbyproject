import React from 'react'
import { Flex, Box } from '@chakra-ui/react'

import { TopNav } from '../../organisms/TopNav'

export const MainTemplate = ({ children, uri }) => {
  return (
    <Box>
      <Box bg="black">
        <Box margin="0 auto" p="0 20px" m="0 auto">
          <TopNav uri={uri} />
        </Box>
      </Box>
      <Flex overflowY="auto" zIndex={1}>
        {children}
      </Flex>
    </Box>
  )
}
