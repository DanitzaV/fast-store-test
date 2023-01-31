module.exports = {
  // Theming
  theme: 'custom-theme',

  // Ecommerce Platform
  platform: 'vtex',

  // Platform specific configs for API
  api: {
    storeId: 'itglobers',
    workspace: 'vvmarcelo',
    environment: 'vtexcommercestable',
    hideUnavailableItems: true,
  },

  // Default channel
  session: {
    currency: {
      code: 'USD',
      symbol: '$',
    },
    locale: 'en-US',
    channel: '{"salesChannel":"1","regionId":""}',
    country: 'USA',
    postalCode: null,
    person: null,
  },

  // Production URLs
  storeUrl: 'https://vvmarcelo--itglobers.myvtex.com',
  secureSubdomain: 'https://secure.itglobers.com',
  checkoutUrl: 'https://secure.itglobers.com/checkout',
  loginUrl: 'https://secure.itglobers.com/api/io/login',
  accountUrl: 'https://secure.itglobers.com/api/io/account',

  // Lighthouse CI
  lighthouse: {
    server: process.env.BASE_SITE_URL || 'http://localhost:9000',
    pages: {
      home: '/',
      pdp: '/robot-aspiradora-itgqa-icasa-7704353366631/p',
      collection: '/electrodomesticos',
    },
  },

  // E2E CI
  cypress: {
    pages: {
      home: '/',
      pdp: '/robot-aspiradora-itgqa-icasa-7704353366631/p',
      collection: '/electrodomesticos',
      collection_filtered:
        '/electrodomesticos?initialMap=c&initialQuery=electrodomesticos&map=category-1',
      search: '/s?q=robot',
    },
  },

  analytics: {
    // https://developers.google.com/tag-platform/tag-manager/web#standard_web_page_installation,
    gtmContainerId: 'GTM-PGHZ95N',
  },
}
