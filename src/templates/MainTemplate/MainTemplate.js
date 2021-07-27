import React, { Fragment } from 'react'
import { Flex, Box } from '@chakra-ui/react'

import { TopNav } from '../../organisms/TopNav'

export const MainTemplate = ({ children, uri }) => {
  return (
    <Fragment>
      <Box p="0 20px" m="0 auto" bg="black">
        <TopNav uri={uri} />
      </Box>
      <Flex overflowY="auto">{children}</Flex>
    </Fragment>
  )
}
