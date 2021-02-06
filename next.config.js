const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching: [
      {
        urlPattern: '/*',
        handler: 'networkFirst',
        method: 'GET',
      },
    ],

  },
  env: {
    API_PROTOCOL: process.env.API_PROTOCOL,
    API_URL: process.env.API_URL,
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
    KAKAO_JS_SDK_KEY: process.env.KAKAO_JS_SDK_KEY,
  },
})
