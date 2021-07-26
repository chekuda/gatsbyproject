import React from 'react'
import { Box } from '@chakra-ui/react'

import { motion } from 'framer-motion'

export const BurgerMenu = ({ onClick, animate, cycle }) => {
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
