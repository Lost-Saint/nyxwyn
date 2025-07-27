<script lang="ts">
	import { page } from '$app/state';
	import { useSiteConfig, type SiteConfig } from '$lib/utils/use-site-config.svelte';

	const siteConfig = useSiteConfig();

	let {
		title = siteConfig.current.name,
		ogImage = siteConfig.current.ogImage,
		description = siteConfig.current.description,
		keywords = siteConfig.current.keywords
	}: {
		title?: string;
		ogImage?: SiteConfig['ogImage'];
		description?: string;
		keywords?: string[];
	} = $props();

	const trueTitle = $derived(
		title === siteConfig.current.name
			? siteConfig.current.name
			: `${title} - ${siteConfig.current.name}`
	);
</script>

<svelte:head>
	<title>{trueTitle}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords?.join(',')} />
	<meta name="author" content="lostsaint" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content={siteConfig.current.url} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={ogImage?.url} />
	<meta name="twitter:image:alt" content={title} />
	<meta name="twitter:creator" content="lostsaint" />
	<meta property="og:title" content={title} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={siteConfig.current.url + page.url.pathname} />
	<meta property="og:image" content={ogImage?.url} />
	<meta property="og:image:alt" content={title} />
	<meta property="og:image:width" content={ogImage?.width} />
	<meta property="og:image:height" content={ogImage?.height} />
	<meta property="og:description" content={description} />
	<meta property="og:site_name" content={siteConfig.current.name} />
	<meta property="og:locale" content="EN_US" />
	<meta name="geo.region" content="US-TX" />
	<meta name="geo.placename" content="Texas, USA" />
	<meta name="geo.position" content="31.9686;-99.9018" />
	<meta name="ICBM" content="31.9686, -99.9018" />

	<!-- JSON-LD Schema -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Person",
			"name": "Lost Saint",
			"jobTitle": "Software Developer",
			"description": "Full-stack software developer specializing in web applications, distributed systems, and interactive experiences. Expert in Go, Python, SvelteKit, and modern development practices.",
			"url": "",
			"sameAs": ["https://github.com/Lost-Saint"],
			"address": {
				"@type": "PostalAddress",
				"addressLocality": "Texas",
				"addressCountry": "United States"
			},
			"knowsAbout": [
				"Software Development",
				"Full-Stack Development",
				"Web Development",
				"Go Programming",
				"Python Development",
				"JavaScript",
				"TypeScript",
				"SvelteKit",
				"Node.js",
				"PostgreSQL",
				"Distributed Systems",
				"Software Architecture",
				"API Design",
				"DevOps",
				"Linux",
				"AWS",
				"Algorithm Design",
				"Data Structures"
			],
			"workLocation": {
				"@type": "Place",
				"name": "Remote / Texas, USA"
			},
			"hasOccupation": {
				"@type": "Occupation",
				"name": "Software Developer",
				"occupationLocation": {
					"@type": "Country",
					"name": "United States"
				},
				"skills": [
					"Full-Stack Development",
					"Backend Development",
					"Frontend Development",
					"Web Application Development",
					"Distributed Systems",
					"Software Architecture",
					"Algorithm Implementation",
					"Database Design",
					"API Development",
					"DevOps Practices"
				]
			}
		}
	</script>
    <script defer src="https://cloud.umami.is/script.js" data-website-id="ff1ab351-2413-4ccb-9059-dc8429ab50ae"></script>
</svelte:head>
