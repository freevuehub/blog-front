import React from 'react'
import { css } from '@emotion/react'
import Link from 'next/link'
import { breakPoint } from '~/lib'
import { LazyImage } from '../'

interface IProps {
  src: string
  title: string
  href: string
  category: string
  className?: string
}

const FeaturedCardCss = css`
  display: block;
  position: relative;
  top: 0;
  left: 0;
  overflow: hidden;
  cursor: pointer;
  &.main {
    grid-column: 1/3;
    grid-row: 1/3;
  }
  .image-wrapper {
    width: 100%;
    height: 100%;
    img {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center center;
    }
  }
  .caption {
    position: absolute;
    bottom: 0px;
    left: 0px;
    color: #fff;
    padding: 12px;
    z-index: 10;
    h2 {
      font-size: 36px;
    }
    span {
      text-transform: capitalize;
    }
  }
  .featured-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    transition: all .4s ease;
    z-index: 5;
    font-size: 0;
  }

  @media (max-width: ${breakPoint.tabletPro}) {
    .caption {
      h2 {
        font-size: 24px;
      }
    }
  }
  @media (max-width: ${breakPoint.tabletAir}) {
    margin-top: 20px;
    &.main {
      grid-column: auto;
      grid-row: auto;
    }
  }
  @media (min-width: ${breakPoint.mobile}) {
    &:hover {
      .featured-overlay {
        background-color: rgba(0, 0, 0, 0.125);
      }
    }
  }
`

const FeaturedCard: React.FC<IProps> = (props) => {
  return (
    <Link href={props.href}>
      <a css={FeaturedCardCss} className={props.className}>
        <div className="image-wrapper">
          <LazyImage src={props.src} alt="" />
        </div>
        <div className="caption">
          <h2>{props.title}</h2>
          <span>{props.category}</span>
        </div>
        <div className="featured-overlay">Featured Overlay</div>
      </a>
    </Link>
  )
}

export default FeaturedCard
