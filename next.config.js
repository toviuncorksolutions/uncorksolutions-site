// next.config.js
module.exports = {
  images: {
    deviceSizes: [320, 375, 414, 768, 1024, 1280],
    imageSizes: [16, 64, 128, 256, 384, 480, 640, 760],
    formats: ['image/webp'],
  },
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
