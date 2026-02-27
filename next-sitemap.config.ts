import type { IConfig } from 'next-sitemap';

const config: IConfig = {
  siteUrl: 'https://www.urubugaa.vercel.app', // your deployed site
  generateRobotsTxt: true, // generate robots.txt automatically
  changefreq: 'daily',     // how often pages are updated
  priority: 0.8,           // default priority
  sitemapSize: 5000,        // max URLs per sitemap file
  // Optional: include extra paths manually
  additionalPaths: async (config) => [
    await config.transform(config, '/signup'),
    await config.transform(config, '/signin'),
  ],
};

export default config;