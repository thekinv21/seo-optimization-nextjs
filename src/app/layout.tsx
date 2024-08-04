import { GoogleAnalytics } from '@next/third-parties/google'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: {
		absolute: 'SEO Optimization',
		template: `%s | SEO Optimization`,
	},
	description: 'Generated by create next app',

	// website favicon meta tags
	icons: {
		icon: '/favicon.svg',
		shortcut: '/favicon.svg',
		apple: '/apple-touch-icon.png',
		other: {
			rel: '/',
			url: '/android-chrome-192x192.png',
			sizes: '192x192',
			type: 'image/png',
		},
	},

	// don't touch this like phone number
	formatDetection: {
		telephone: false,
	},

	// openGraph images and videos need find base url for define absolute path images and videos
	metadataBase: new URL('http://localhost:3000'),

	// social media meta tags
	openGraph: {
		type: 'website',

		// if you have multiple languages on your website you need other locales here
		locale: 'en_US',

		// website name

		siteName: 'SEO Optimization',
		description: "Site's description",

		// you can add multiple images and videos
		images: [
			{
				url: '/product.jpg',
				width: 800,
				height: 600,
				alt: 'product_alt',
			},
		],

		// your can add emails
		emails: ['user@gmail.com'],
	},

	// twitter meta tags
	twitter: {
		card: 'summary',
		title: 'SEO Optimization',
		description: "Site's description",
		images: [
			{
				url: '/product.jpg',
				width: 800,
				height: 600,
				alt: 'product_alt',
			},
		],
		creator: 'Creator User Name',
		site: '@site',
	},

	// for localization if you have multiple languages on your website

	alternates: {
		// website canonical url
		canonical: 'http://localhost:3000',

		// locales for multiple languages
		languages: {
			'en-US': 'http://localhost:3000/en',
			'tr-TR': 'http://localhost:3000/tr',
		},

		// this actions is not actual but if you have like case mobile version you can use this
		media: {
			'only-screen and (max-width: 640px)': 'http://localhost:3000/mobile',
		},

		// if you have rss feed you can use this
		types: {
			'application/rss+xml': 'http://localhost:3000/rss',
		},
	},

	// for search engine optimization
	verification: {
		google: 'google-site-verification',
		yandex: 'yandex-verification',
	},
}

// show theme color in browser tab

export const viewport: Viewport = {
	themeColor: '#000000',
}

interface IRootLayout {
	children: React.ReactNode
}

export default function RootLayout({ children }: Readonly<IRootLayout>) {
	return (
		<html lang='en'>
			<body className={inter.className}>{children}</body>
			<GoogleAnalytics gaId='G-XYZ' />
		</html>
	)
}
