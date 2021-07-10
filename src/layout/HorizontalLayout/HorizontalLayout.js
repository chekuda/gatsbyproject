import React from 'react'
import { Flex, Box, Link, Image } from '@chakra-ui/react'
import { Link as GatsbyLink } from 'gatsby'
import { TopBanner } from '../../components/TopBanner'

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
  return (
    <Box h="200%" bgColor="#131315">
      <Box bg="black" bgImage={'/images/heroImage.jpeg'} backgroundPosition="bottom" backgroundSize="cover">
        <Box w="80%" maxW={1024} m="0 auto">
          <TopBanner />
          <Box display="flex" justifyContent="center">
            <Image width="400px" objectFit="cover" src={'/images/alomejor.svg'} alt="Alomejor logo" />
          </Box>
          <Flex color="white">
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
      <Box w="80%" maxW={1024} m="0 auto" p="20px 0" bgColor="#131315">
        {children}
      </Box>
    </Box>
  )
}
