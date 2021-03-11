import { useState, useEffect } from 'react'

export const useScroll = () => {
  const [scrollTop, setScrollTop] = useState<number>(0)

  useEffect(() => {
    window.onscroll = function() {
      setScrollTop(this.scrollY)
    }

    return () => {
      setScrollTop(0)
    }
  }, [])

  return scrollTop
}
