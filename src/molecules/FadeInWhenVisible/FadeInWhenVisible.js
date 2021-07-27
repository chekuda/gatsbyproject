import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import './styles.sass'

export const FadeInWhenVisible = ({ list, children, threshold = 0 }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [inView, controls])

  return (
    <motion.div ref={ref} variants={list} initial="hidden" animate={controls} className="fadeInContainer">
      {children}
    </motion.div>
  )
}
