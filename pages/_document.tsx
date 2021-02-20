import Document, { Html, Head, Main, NextScript } from 'next/document'
import { GA_TRACKING_ID } from '~/lib/gtag'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            data-ad-client="ca-pub-4182995337229754"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `
            }}
          />
          <script src="https://developers.kakao.com/sdk/js/kakao.js" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                Kakao.init('${process.env.KAKAO_JS_SDK_KEY}');
                Kakao.isInitialized();
              `
            }}
          />
          <script async defer src="https://buttons.github.io/buttons.js" />
          <title>FreeVue Blog</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
