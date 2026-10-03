/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://jagbasrai.vercel.app",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  generateIndexSitemap: true,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/admin/*", "/dashboard/*"],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/admin", "/dashboard"] },
    ],
    additionalSitemaps: ["https://jagbasrai.vercel.app/sitemap.xml"],
  },
};

module.exports = config;
