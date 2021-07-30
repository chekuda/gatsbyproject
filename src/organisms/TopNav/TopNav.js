import React, { useState, useCallback } from 'react'
import { Flex, Box, Image, useBreakpointValue, useTheme } from '@chakra-ui/react'
import { graphql, useStaticQuery } from 'gatsby'
import { motion, AnimatePresence, useCycle } from 'framer-motion'

import { useDisableScroll } from '../../lib/hooks'

import { Nav } from '../../atoms/Nav'
import { BurgerMenu } from '../../atoms/BurgerMenu'
import { burgerAnimation } from './constants'

export const TopNav = ({ uri }) => {
  const data = useStaticQuery(graphql`
    query SocialQuery {
      allDatoCmsSocialProfile {
        nodes {
          id
          url
          profileType
          image {
            url
          }
        }
      }
    }
  `)
  // const { nodes } = data.allDatoCmsSocialProfile
  const breakPoint = useBreakpointValue({
    base: { burger: 'block', normal: 'none' },
    md: { burger: 'none', normal: 'block' },
  })
  const theme = useTheme()
  const [animate, cycle] = useCycle(...burgerAnimation)
  const [show, setShow] = useState(false)
  const [logoLoaded, seLogoLoaded] = useState(false)
  const handleShow = useCallback(() => setShow(!show), [show])
  const onClikLink = useCallback(() => {
    handleShow()
    cycle()
  }, [show])
  useDisableScroll([show])

  return (
    <Box pos="relative" zIndex={1}>
      <Flex color="white" justifyContent="space-between" alignItems="center" h="115px">
        <Flex justifyContent="center">
          {uri !== '/' && (
            <motion.div animate={{ y: 0 }} initial={{ y: 10 }} transition={{ type: 'Inertia' }}>
              <Image
                width="150px"
                opacity={logoLoaded ? 1 : 0}
                objectFit="cover"
                src={'/images/alomejorWhite.svg'}
                alt="Alomejor logo"
                onLoad={() => seLogoLoaded(true)}
              />
            </motion.div>
          )}
        </Flex>
        {breakPoint && (
          <Box p="20px 0" as="nav" decoration="none">
            <Box display={breakPoint?.burger} onClick={handleShow} className="nav-burger">
              <BurgerMenu onClick={handleShow} animate={animate} cycle={cycle} />
            </Box>
            <Box display={breakPoint?.normal} className="nav-main">
              <Nav uri={uri} />
            </Box>
          </Box>
        )}
      </Flex>
      <AnimatePresence>
        {show && (
          <motion.div
            key="navBanner"
            animate={{ x: '20%' }}
            initial={{ x: '100%' }}
            exit={{ x: '120%' }}
            transition={{ type: 'Inertia' }}
          >
            <Box
              className="nav-banner"
              pos="absolute"
              top="0"
              right="0"
              width="100%"
              height="calc(100vh - 115px)"
              boxShadow={`-3px 5px 9px 0px ${theme?.myColors?.darkShadow}`}
            >
              <Flex
                flexDirection="column"
                textAlign="center"
                justifyContent="center"
                lineHeight="2em"
                height="100%"
                w="100%"
                bg={theme?.myColors.bgGray}
                color="white"
              >
                <Nav uri={uri} onClick={onClikLink} />
              </Flex>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  )
}
