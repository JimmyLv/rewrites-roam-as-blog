module.exports = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: 'https://roamresearch.com',
      },
    ]
  },
}
