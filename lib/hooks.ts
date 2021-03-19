import { useState, useEffect } from 'react'

interface IUseScrollValue {
  scrollTop: number
  isUp: boolean
  isDown: boolean
}

export const useScroll = (axis: 'x' | 'y' = 'y'): [IUseScrollValue, (value: number) => void] => {
  const [scrollTop, setScrollTop] = useState<number>(0)
  const [isUp, setIsUp] = useState<boolean>(false)
  const [isDown, setIsDown] = useState<boolean>(false)
  const callback = (value: number) => {
    if (axis === 'x') {
      window.scrollTo(value, 0)
    }
    if (axis === 'y') {
      window.scrollTo(0, value)
    }
  }

  useEffect(() => {
    window.onscroll = function() {
      if (axis === 'y') {
        setScrollTop(this.scrollY)
        setIsUp(scrollTop > this.scrollY)
        setIsDown(scrollTop <= this.scrollY)
        console.log(scrollTop > this.scrollY)
      }
      if (axis === 'x') {
        setIsUp(scrollTop > this.scrollX)
        setIsDown(scrollTop <= this.scrollX)
        setScrollTop(this.scrollX)
      }
    }

    return () => {
      setScrollTop(0)
    }
  }, [])

  return [
    {
      scrollTop,
      isUp,
      isDown,
    },
    callback,
  ]
}
