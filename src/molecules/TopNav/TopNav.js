import React, { useState, Fragment, useCallback } from 'react'
import { Flex, Box, Image, useBreakpointValue, useTheme } from '@chakra-ui/react'
import { graphql, useStaticQuery } from 'gatsby'
import { motion, AnimatePresence, useCycle } from 'framer-motion'

import { useDisableScroll } from '../../lib/hooks/useDisableScroll'

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
  const handleShow = useCallback(() => setShow(!show), [show])
  const onClikLink = useCallback(() => {
    handleShow()
    cycle()
  }, [show])
  useDisableScroll([show])
  return (
    <Fragment>
      <Flex color="white" justifyContent="space-between" alignItems="center" h="115px">
        <Flex display="flex" justifyContent="center">
          <Image width="150px" objectFit="cover" src={'/images/alomejor.svg'} alt="Alomejor logo" />
        </Flex>
        <Box p="20px 0" as="nav" decoration="none">
          <Box display={breakPoint?.burger} onClick={handleShow}>
            <BurgerMenu onClick={handleShow} animate={animate} cycle={cycle} />
          </Box>
          <Box display={breakPoint?.normal}>
            <Nav uri={uri} />
          </Box>
        </Box>
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
              pos="absolute"
              top="0"
              right="0"
              width="100%"
              height="calc(100vh - 115px)"
              boxShadow={`-7px 2px 9px 0px ${theme?.myColors?.darkShadow}`}
            >
              <Flex
                flexDirection="column"
                textAlign="center"
                justifyContent="center"
                lineHeight="2em"
                height="100%"
                w="100%"
                bg={theme?.myColors.lightGrey}
              >
                <Nav uri={uri} onClick={onClikLink} />
              </Flex>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </Fragment>
  )
}