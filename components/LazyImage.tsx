import React, { useEffect, useRef, useState } from 'react'
import styled from '@emotion/styled'
import { ITheme } from '../types'

interface  IProps {
  src: string
  alt?: string
  className?: string
}

const ImageWrapStyled = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  ${(props: ITheme) => ({
    backgroundColor: props.theme?.text,
  })}
  canvas {
    display: none;
    filter: blur(5px);
    transition: all .3s;
  }
  &.on {
    canvas {
      display: block;
      filter: blur(0);
    }
  }
`
const CanvasStyled = styled.canvas`
  display: block;
  width: 100%;
  min-height: 100%;
`

const LazyImage: React.FC<IProps> = (props) => {
  const canvas = useRef<HTMLCanvasElement>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const onImageLoad = (event: any) => {
    const { current: $canvas } = canvas
    const $img: HTMLImageElement = event.currentTarget

    if ($canvas !== null) {
      const { width, height } = $img
      const context = $canvas.getContext('2d')

      $canvas.width = width
      $canvas.height = height

      if (context) {
        const { clientWidth, clientHeight } = $canvas

        $canvas.width = clientWidth
        $canvas.height = clientHeight

        context.clearRect(0, 0, clientWidth, clientHeight)
        context.drawImage($img, 0, 0, clientWidth, clientHeight)

        setLoading(false)
      }
    }
  }

  useEffect(() => {
    const io = new IntersectionObserver(() => {
      const image = new Image()

      image.onload = onImageLoad

      if (loading) {
        image.src = `${props.src}?size=medium`
      }
    })

    if (canvas.current) {
      io.observe(canvas.current)
    }
  }, [props.src])

  return props.src ? (
      <ImageWrapStyled className={loading ? '' : 'on'}>
        { !loading && (<img src={`${props.src}?size=tiny`} alt="" />) }
        <CanvasStyled className={props.className || ''} ref={canvas} />
      </ImageWrapStyled>
    ) : <></>
}

export default LazyImage
