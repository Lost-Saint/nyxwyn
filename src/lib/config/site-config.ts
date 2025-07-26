import { defineSiteConfig } from '$lib/utils/use-site-config.svelte';

export const siteConfig = defineSiteConfig({
	name: 'Lost Saint',
	url: 'https://www.bits-ui.com',
	description:
		'Lost Saint – Full-Stack Software Developer based in USA. Building web applications, distributed systems, and interactive experiences. Specializing in Go, Python, SvelteKit, and modern development practices.',
	ogImage: {
		url: 'https://www.bits-ui.com/og.png',
		height: '630',
		width: '1200'
	},
	author: 'Lost Saint',
	license: {
		name: 'MIT',
		url: 'https://github.com/huntabyte/bits-ui/blob/main/LICENSE'
	},
	links: {
		x: 'https://x.com',
		github: 'https://github.com/Lost-Saint/nyxwyn'
	},
	keywords: [
		'Lost Saint',
		'Software Developer USA',
		'Full Stack Developer USA',
		'Texas Web Developer',
		'USA Programmer',
		'Software Engineer USA',
		'Go Developer',
		'Python Developer',
		'SvelteKit Developer',
		'Remote Developer USA',
		'Web Development USA',
		'Software Development USA',
		'Tech Talent USA'
	]
});

export type SiteConfig = typeof siteConfig;
