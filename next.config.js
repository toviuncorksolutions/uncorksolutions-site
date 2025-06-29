module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/initiative-readiness-scan',
        permanent: true, // 301 redirect
      },
    ];
  },
};