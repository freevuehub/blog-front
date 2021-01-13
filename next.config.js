const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    dest: 'public'
  },
  env: {
    API_PROTOCOL: process.env.API_PROTOCOL,
    API_URL: process.env.API_URL,
    GOOGLE_ANALYTICE_ID: process.env.GOOGLE_ANALYTICE_ID,
  },
})
