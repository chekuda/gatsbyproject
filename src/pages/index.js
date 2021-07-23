import React from 'react'
import { motion } from 'framer-motion'
import { Flex, Box, Image, Heading, Text, useBreakpointValue, useBreakpoint } from '@chakra-ui/react'

const Section = ({ item, list }) => {
  const breakPoints = useBreakpointValue({
    base: {
      height: 'auto',
      direction: 'column',
    },
    md: {
      height: 'calc(100vh - 115px)',
      direction: 'row',
    },
  })

  return (
    <motion.div variants={list} initial="hidden" animate="visible">
      <Flex
        as="section"
        p="50px 0"
        alignItems="center"
        w="100%"
        h={breakPoints?.height}
        flexDirection={breakPoints?.direction}
      >
        <Box flex="1" justifyContent="center">
          <motion.div variants={item}>
            <Heading as="h1" size="4xl" paddingBottom="20px">
              Jose Luis Checa
            </Heading>
          </motion.div>
          <motion.div variants={item}>
            <Text as={'p'} p="20px 50px 0 0" lineHeight="2rem">
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
            </Text>
          </motion.div>
        </Box>
        <motion.div variants={item}>
          <Box justifyContent="center">
            <Image width="300px" objectFit="cover" src="/images/daddy_no_bg.png" alt="Alomejor logo" />
          </Box>
        </motion.div>
      </Flex>
    </motion.div>
  )
}

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
      {[1, 2].map(ele => (
        <Section key={ele} item={item} list={list} />
      ))}
    </Box>
  )
}

export default IndexPage
