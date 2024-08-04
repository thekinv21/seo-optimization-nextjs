import { getServerSideSitemap, ISitemapField } from 'next-sitemap'

export async function GET(request: Request) {
	const BASE_URL = process.env.BASE_URL || 'http://localhost:3000'

	// Here we need to list the frequently updated pages in order
	const fields: ISitemapField[] = [
		{
			loc: BASE_URL,
			lastmod: new Date().toISOString(),
			changefreq: 'daily',
			priority: 0.9,
		},
		{
			loc: `${BASE_URL}/about`,
			lastmod: new Date().toISOString(),
			changefreq: 'daily',
			priority: 1,
		},
		{
			loc: `${BASE_URL}/contact`,
			lastmod: new Date().toISOString(),
			changefreq: 'weekly',
			priority: 0.8,
		},
	]

	return getServerSideSitemap(fields)
}
