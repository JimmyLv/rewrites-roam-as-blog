module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)?',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*'
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,HEAD,PUT,PATCH,POST,DELETE'
          },
          { 
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self' https://app.thebrain.com"
          },
          {
            key: 'X-Frame-Options',
            value: 'ALLOW-FROM https://app.thebrain.com'
          }
        ]
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: '/team',
        destination: '/about',
      },
      {
        source: '/about-us',
        destination: '/about',
      },
      // Path Matching - will match `/post/a` but not `/post/a/b`
      {
        source: '/post/:slug',
        destination: '/news/:slug',
      },
      // Wildcard Path Matching - will match `/blog/a` and `/blog/a/b`
      {
        source: '/blog/:slug*',
        destination: '/news/:slug*',
      },
      // Rewriting to an external URL
      {
        source: '/docs/:slug',
        destination: 'http://example.com/docs/:slug',
      },
      // Rewriting to an external URL
      {
        source: '/thebrain',
        destination: 'https://app.thebrain.com/brains/58237096-f2d5-46de-88b0-b23ecc50ac7d/thoughts/00c587f4-9553-49c3-9b65-5350bd3b3e71/attachments/95354c5c-e823-4e11-b741-58c3634bd6a5',
      },
      // Wildcard Path Matching - will match `/blog/a` and `/blog/a/b`
      {
        source: '/myblog/:slug*',
        destination: 'https://blog.jimmylv.info/:slug*',
      },
      // Rewriting to an external URL
      {
        source: '/roam/:slug*',
        destination: 'https://roamresearch.com',
      },
      // Rewriting to an external URL
      {
        source: '/js/:slug*',
        destination: 'https://roamresearch.com/js/:slug*',
      },
      // Rewriting to an external URL
      {
        source: '/assets/:slug*',
        destination: 'https://roamresearch.com/assets/:slug*',
      },
      // Rewriting to an external URL
      {
        source: '/pwacompat.min.js',
        destination: 'https://roamresearch.com/pwacompat.min.js',
      },
      // Rewriting to an external URL
      {
        source: '/manifest.webmanifest',
        destination: 'https://roamresearch.com/manifest.webmanifest',
      },
      // Rewriting to an external URL
      {
        source: '/favicon.ico',
        destination: 'https://roamresearch.com/favicon.ico',
      },
      // Rewriting to an external URL
      {
        source: '/:slug*',
        destination: 'https://roamresearch.com',
      }
    ]
  },
}
