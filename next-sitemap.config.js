// next-sitemap.config.js
module.exports = {
  siteUrl: 'https://www.uncorksolutions.com',
  generateRobotsTxt: true,
  exclude: [
    '/variant-a',
    '/variant-b',
  ],
  robotsTxtOptions: {
    policies: [
      { userAgent: 'OAI-SearchBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'Anthropic-Bot', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'CCbot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'Gemini', allow: '/' },
      { userAgent: '*', allow: '/' },
    ],
    additionalSitemaps: ['https://www.uncorksolutions.com/sitemap.xml'],
  },
  additionalRobotsTxt: `
# AI & LLM Crawler Policy: This site welcomes AI indexing and does not block AI user-agents.
`,
};
