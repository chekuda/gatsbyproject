import React, { Fragment, useMemo } from 'react'
import { Flex, Box } from '@chakra-ui/react'

import { TopNav } from '../../organisms/TopNav'

import './styles.sass'

export const MainTemplate = ({ children, uri }) => {
  const isHome = useMemo(() => uri === '/', [uri])
  return (
    <Fragment>
      <Box p="0 20px" m="0 auto" bg="black">
        <TopNav uri={uri} isHome={isHome} />
      </Box>
      <Flex className={isHome ? 'container-black' : 'container-white'} overflowY="auto">
        {children}
      </Flex>
    </Fragment>
  )
}
