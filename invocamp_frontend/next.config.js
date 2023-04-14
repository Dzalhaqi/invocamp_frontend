/** @type {import('next').NextConfig} */
module.exports = {
  // basePath: '/src/pages',
  images: {
    domains: ['images.unsplash.com']
  },
  env: {
    API_URL: "http://172.23.0.1:8000",
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Replace React with Preact only in client production build
      if (process.env.NODE_ENV === 'production') {
        Object.assign(config.resolve.alias, {
          react: 'preact/compat',
          'react-dom': 'preact/compat'
        })
      }
    }
    return config
  },
}

