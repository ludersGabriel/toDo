const withImages = require('next-images')

module.exports = withImages({
  reactStrictMode: true,
  esModule: true,
  i18n: {
    locales: ['default', 'en', 'pt-BR'],
    defaultLocale: 'default',
  },
  trailingSlash: true,
  publicRuntimeConfig: {
    uri: process.env.URI,
  },
})
