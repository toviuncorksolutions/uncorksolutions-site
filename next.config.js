// next.config.js
module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/initiative-readiness-scan',
        permanent: true, // 301 redirect
      },
      {
        source: '/ai-readiness-assessment',
        destination: '/ai-readiness-playbook',
        permanent: true, // 301 redirect
      },
    ];
  },
};
