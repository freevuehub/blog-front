import Head from 'next/head'
// import { useRouter } from 'next/router'

interface IProps {
  title?: string
  keywords?: string
  description?: string
  image?: string
}

const HeadSet: React.FC<IProps> = (props) => {
  // const router = useRouter()
  const defaultImage = 'https://file.freevue.dev/images/8bf395a7-976c-442a-b87a-9346ce90638e.png'
  const title = props.title
    ? `Freevue Blog | ${props.title}`
    : 'Freevue Blog'
  const keywords = props.keywords
    ? `freevue, front-end, 프리뷰, ${props.keywords}`
    : 'freevue, front-end, 프리뷰'

  return (
    <Head>
      <meta name="keywords" content={keywords} />

      <title>{title}</title>

      <meta property="og:title" content={title} />
      <meta name="twitter:title" content={title} />
      {
        props.description && (
          <>
            <meta name="description" content={props.description} />
            <meta property="og:description" content={props.description} />
            <meta name="twitter:description" content={props.description} />
          </>
        )
      }
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="FreeVue Blog" />
      <meta property="og:image" content={props.image || defaultImage} />
      <meta name="twitter:image" content={props.image || defaultImage} />
      <meta property="og:url" content="https://freevue.dev" />
      <meta name="twitter:url" content="https://freevue.dev" />
      <meta property="og:type" content="article" />
      <meta name="twitter:card" content="summary_large_image" />

      <link rel="image_src" href={defaultImage} />
    </Head>
  )
}

export default HeadSet
