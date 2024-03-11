/** @type {import('next-sitemap').IConfig} */

module.exports = {
	siteUrl: 'https://vereteno-hats.ru',
	changefreq: 'daily',
	priority: 0.7,
	sitemapSize: 5000,
	generateRobotsTxt: true,
	exclude: ['/admin', '/auth', '/lk', '/cart'],
	robotsTxtOptions: {
		policies: [
			{
				userAgent: '*',
				allow: '/',
			},
		],
	},
}