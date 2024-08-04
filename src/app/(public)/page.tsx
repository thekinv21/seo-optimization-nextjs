import { Metadata } from 'next'
import Image from 'next/image'

import { items, TypeItem } from './page.item'
import styles from './page.module.scss'

export const metadata: Metadata = {
	title: 'Home',
	description: 'Home Page example for us',
}

export default function Home() {
	return (
		<section className={styles.container}>
			<header>
				<article itemScope itemType='http://schema.org/Article'>
					<h1 itemProp='headline'>NextJS Project</h1>
					<p itemProp='author' itemScope itemType='http://schema.org/Person'>
						By <span itemProp='name'>John Doe</span>
					</p>
					<p itemProp='articleBody'>
						Get started by editing&nbsp;
						<code>src/app/page.tsx</code>
					</p>

					<p>
						<time dateTime='2021-09-01' itemProp='datePublished'>
							September 1, 2021
						</time>
					</p>
				</article>
				<nav>
					<a href='#' rel='noopener noreferrer'>
						By{' '}
						<Image
							src='/vercel.svg'
							alt='Vercel Logo'
							className='dark:invert'
							width={100}
							height={24}
							priority
						/>
					</a>
				</nav>
			</header>

			<div className={styles.content}>
				<Image
					src='/next.svg'
					alt='Next.js Logo'
					width={180}
					height={37}
					priority
				/>
			</div>

			<div className={`group ${styles.sub_content}`}>
				{items.map((item: TypeItem, idx: number) => (
					<a
						key={idx}
						href={item.url}
						target='_blank'
						rel='noopener noreferrer'
					>
						<h2>
							{item.title} <span>-&gt;</span>
						</h2>
						<p>{item.description}</p>
					</a>
				))}
			</div>
		</section>
	)
}
