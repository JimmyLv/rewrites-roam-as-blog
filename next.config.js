module.exports = {
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
        source: '/roamcn',
        destination: 'https://roamcn.club',
      },
      // Rewriting to an external URL
      {
        source: '/rr',
        destination: 'https://roamresearch.com/#/app/RoamCN',
      },
    ]
  },
}
