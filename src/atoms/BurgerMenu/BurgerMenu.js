import React from 'react'
import { Box } from '@chakra-ui/react'

import { motion, useCycle } from 'framer-motion'

export const BurgerMenu = ({ onClick }) => {
  const [animate, cycle] = useCycle(
    {
      main: { rotateZ: 0 },
      firstLine: { y: 0 },
      secondLine: { y: 0 },
      thirdLine: { opacity: 1 },
    },
    {
      main: {
        rotateZ: '45deg',
      },
      firstLine: { y: 6 },
      secondLine: { rotateZ: '90deg' },
      thirdLine: { opacity: 0 },
    },
  )
  return (
    <motion.div animate={animate.main} transition={{ duration: 0.3 }} onTap={() => cycle()}>
      <Box onClick={onClick}>
        <motion.div animate={animate.firstLine} transition={{ duration: 0.3 }}>
          <Box h="2px" width="20px" bg="white" m="4px 0" />
        </motion.div>
        <motion.div animate={animate.secondLine} transition={{ duration: 0.3 }}>
          <Box h="2px" width="20px" bg="white" m="2px 0"></Box>
        </motion.div>
        <motion.div animate={animate.thirdLine} transition={{ duration: 0.3 }}>
          <Box h="2px" width="20px" bg="white" m="4px 0"></Box>
        </motion.div>
      </Box>
    </motion.div>
  )
}
