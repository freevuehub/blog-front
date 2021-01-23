import React, { useEffect, useRef } from 'react'
import styled from '@emotion/styled'

interface  IProps {
  src: string
  alt?: string
  className?: string
}

const ImageWrapStyled = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const CanvasStyled = styled.canvas`
  display: block;
  width: 100%;
  min-height: 100%;
`

const LazyImage: React.FC<IProps> = (props) => {
  const canvas = useRef<HTMLCanvasElement>(null)
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

        context.drawImage($img, 0, 0, clientWidth, clientHeight)
      }
    }
  }

  useEffect(() => {
    const image = new Image()

    image.onload = onImageLoad
    image.src = props.src
  }, [props.src])

  return props.src ? (
      <ImageWrapStyled>
        <CanvasStyled className={props.className || ''} ref={canvas} />
      </ImageWrapStyled>
    ) : <></>
}

export default LazyImage
