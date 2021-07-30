import React, { Fragment } from 'react'
import { Box, Link, useTheme } from '@chakra-ui/react'
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
  // {
  //   name: 'Pinturas',
  //   url: '#',
  // },
  // {
  //   name: 'Libros',
  //   url: '#',
  // },
  // {
  //   name: 'Exposiciones',
  //   url: '#',
  // },
]

export const Nav = ({ uri, lineHeight = 'inherit', onClick = () => {} }) => {
  const theme = useTheme()
  return (
    <Fragment>
      {links.map(({ name, url }) => (
        <Link
          _hover={{ textDecoration: 'none', color: theme?.myColors?.tomato }}
          _focus={{ outline: 'none' }}
          m="0 5px"
          to={url}
          fontSize="1rem"
          as={GatsbyLink}
          key={name}
          href={url}
          lineHeight={lineHeight}
        >
          <Box as="span" borderBottom={url === uri ? 'solid' : 'none'} onClick={onClick}>
            {name}
          </Box>
        </Link>
      ))}
    </Fragment>
  )
}
