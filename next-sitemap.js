/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://uncorksolutions.com', // replace with your domain after go-live
  generateRobotsTxt: true,
  exclude: ['/api/*', '/variant-a', '/variant-b'],
};
