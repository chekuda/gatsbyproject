import React from 'react'
import { Box } from '@chakra-ui/react'

import { FadeInWhenVisible } from '../molecules/FadeInWhenVisible'
import { Section } from '../atoms/Section'

const dummyContent = [
  {
    heading: 'Jose Luis Checa',
    content: (
      <span>
        Descubrir detalladamente, la muerte y sus formas.
        <br />
        Tocar las imágenes del genocidio consentido en África.
        <br />
        Contar las catástrofes y agonías, oír las manipulaciones,
        <br />
        las mentiras, en declaraciones, del político de turno.
        <br />
        Voy a desempolvar, atrapar el alma de Bukowski.
        <br />
        Ver si de una puta vez, con estas míseras miserias,
        <br />
        le doy forma a este poema.
        <br />
        Que tengo atragantado.
        <br />
      </span>
    ),
    image: {
      src: '/images/daddy_no_bg.png',
      alt: 'jose luis checa',
      width: '300px',
    },
  },
  {
    heading: 'Ultimos Escritos',
    content: (
      <span>
        Descubrir detalladamente, la muerte y sus formas.
        <br />
        Tocar las imágenes del genocidio consentido en África.
        <br />
        Contar las catástrofes y agonías, oír las manipulaciones,
        <br />
        las mentiras, en declaraciones, del político de turno.
        <br />
        Voy a desempolvar, atrapar el alma de Bukowski.
        <br />
        Ver si de una puta vez, con estas míseras miserias,
        <br />
        le doy forma a este poema.
        <br />
        Que tengo atragantado.
        <br />
      </span>
    ),
    image: {
      src: '/images/daddy_no_bg.png',
      alt: 'jose luis checa',
      width: '300px',
    },
  },
]

const IndexPage = () => {
  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
    hidden: { opacity: 0 },
  }

  const item = {
    visible: { opacity: 1, y: 0, duration: 0.3 },
    hidden: { opacity: 0, y: 20 },
  }
  return (
    <Box w="100%">
      {dummyContent.map(ele => (
        <FadeInWhenVisible key={ele.heading} list={list} ele={ele} threshold={0.2}>
          <Section itemAnimation={item} heading={ele.heading} content={ele.content} image={ele.image} />
        </FadeInWhenVisible>
      ))}
    </Box>
  )
}

export default IndexPage
