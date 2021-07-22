import React, { useMemo, useRef } from 'react'
import { Flex, Box, Link, Image } from '@chakra-ui/react'
import { Link as GatsbyLink } from 'gatsby'

const links = [
  {
    name: 'Inicio',
    url: '/',
  },
  {
    name: 'Sobre mi',
    url: '/about',
  },
  {
    name: 'Esculturas',
    url: '/esculturas',
  },
]

export const HorizontalLayout = ({ children, uri }) => {
  const isHome = useMemo(() => uri === '/', [uri])
  return (
    <Box>
      <Box bg="black">
        <Box w="80%" maxW={1024} m="0 auto">
          <Flex color="white" justifyContent="space-between" alignItems="center" h="115px">
            <Box display="flex" justifyContent="center">
              <Link to={'/'} href={'/'} as={GatsbyLink} _focus={{ outline: 'none' }}>
                <Image width="150px" objectFit="cover" src={'/images/alomejor.svg'} alt="Alomejor logo" />
              </Link>
            </Box>
            <Box p="20px 0" as="nav" decoration="none">
              {links.map(({ name, url }) => (
                <Link
                  _hover={{ textDecoration: 'none', color: 'blue.400' }}
                  _focus={{ outline: 'none' }}
                  m="0 5px"
                  to={url}
                  fontSize="1rem"
                  as={GatsbyLink}
                  borderBottom={url === uri ? 'solid' : 'none'}
                  key={name}
                  href={url}
                  activeStyle={{ borderBottom: 'solid' }}
                >
                  {name}
                </Link>
              ))}
            </Box>
          </Flex>
        </Box>
      </Box>
      <Flex w="80%" maxW={1024} m="0 auto" p="20px 0" overflowY="auto">
        {children}
      </Flex>
    </Box>
  )
}
