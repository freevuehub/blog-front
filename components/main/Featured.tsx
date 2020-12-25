import React from 'react'
import Link from 'next/link'

const FeaturedCard = (props) => (
  <figure className={`featured-link ${props.className}`}>
    <Link to={props.fields.slug}>
      <div className="featured-overlay"></div>
      <Images featuredImage={props.frontmatter.featuredImage} />
      <figcaption>
        <h2>{props.frontmatter.title}</h2>
        <span>{props.frontmatter.category}</span>
      </figcaption>
    </Link>
  </figure>
)
const Featured = () => {
  return (
    <div id="featured">
      {list.map(({ node }, index) => {
        return (
          <FeaturedCard
            key={node.fields.slug}
            className={`featured-${index ? 'secondary' : 'main'}`}
            {...node}
          />
        )
      })}
    </div>
  )
}

export default Featured
