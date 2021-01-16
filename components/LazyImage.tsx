import { useEffect } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const LazyImage: React.FC<any> = (props) => {
  useEffect(() => {
    console.log(props.src)
  }, [props])

  return (
    <LazyLoadImage
      delayTime={1000}
      effect="blur"
      {...props}
    />
  )
}

export default LazyImage
