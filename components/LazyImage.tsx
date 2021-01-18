import { useEffect, useRef } from 'react'
import styled from '@emotion/styled'

const CanvasStyled = styled.canvas`
  display: block;
  width: 100%;
  height: 100%;
`

const LazyImage: React.FC<any> = (props) => {
  const canvas = useRef<HTMLCanvasElement>(null)
  const image = new Image()

  image.onload = (event: any) => {
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

        context.drawImage(image, 0, 0, clientWidth, clientHeight)
      }
    }
  }

  useEffect(() => {
    image.src = props.src
  }, [props.src])

  return (
    <CanvasStyled ref={canvas} />
  )
}

export default LazyImage
