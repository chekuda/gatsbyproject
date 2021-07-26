import React, { useEffect } from 'react'

const unsetOverflow = () => {
  document.body.style.overflow = 'unset'
  document.getElementById('___gatsby').style.overflow = 'unset'
}

export const useDisableScroll = (dependency = []) => {
  useEffect(() => {
    if (dependency[0]) {
      document.body.style.overflow = 'hidden'
      document.getElementById('___gatsby').style.overflow = 'hidden'
    } else {
      unsetOverflow()
    }
    return () => unsetOverflow()
  }, dependency)
}
