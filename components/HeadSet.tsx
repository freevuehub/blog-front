import Head from 'next/head'
import { colorSet } from '../lib'
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
  const image = props.image || defaultImage
  const title = props.title
    ? `Freevue Blog | ${props.title}`
    : 'Freevue Blog'
  const keywords = props.keywords
    ? `freevue, front-end, 프리뷰, ${props.keywords}`
    : 'freevue, front-end, 프리뷰'
  const description = props.description || 'Front-end Developer. FreeVue입니다.'

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="theme-color" content={colorSet.primary} />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />

      <title>{title}</title>

      <meta name="Copyright" content="FreeVue" />
      <meta name="author" content="FreeVue" />
      <meta name="application-name" content="FreeVue Blog" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="FreeVue Blog" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-TileColor" content={colorSet.primary} />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="msapplication-TileImage" content="/icons/ms-icon-144x144.png" />

      <link rel="apple-touch-icon" sizes="57x57" href="/icons/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/icons/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/icons/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/icons/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/icons/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/icons/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/icons/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-icon-180x180.png" />
      <link rel="icon" type="image/png" sizes="192x192"  href="/icons/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/icons/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="shortcut icon" href="/favicon.ico" />

      {/* facebook, kakao */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={title} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content="https://freevue.dev" />
      <meta property="og:type" content="article" />

      {/* twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:card" content="photo" />

      <link rel="image_src" href={image} />
    </Head>
  )
}

export default HeadSet
