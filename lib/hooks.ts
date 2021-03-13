import { useState, useEffect } from 'react'

export const useScroll = () => {
  const [scrollTop, setScrollTop] = useState<number>(0)
  const [isUp, setIsUp] = useState<boolean>(false)
  const [isDown, setIsDown] = useState<boolean>(false)

  useEffect(() => {
    window.onscroll = function() {
      setIsUp(scrollTop > this.scrollY)
      setIsDown(scrollTop <= this.scrollY)
      setScrollTop(this.scrollY)
    }

    return () => {
      setScrollTop(0)
    }
  }, [])

  return {
    scrollTop,
    isUp,
    isDown,
  }
}
