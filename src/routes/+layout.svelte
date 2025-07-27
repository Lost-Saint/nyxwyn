<script lang="ts">
	import '../styles/index.css';

	import { page } from '$app/state';
    import { onNavigate } from '$app/navigation';
	import MetaData from '$lib/components/MetaData.svelte';
	import Header from '$lib/components/Nav.svelte';
	import { useSiteConfig } from '$lib/utils/use-site-config.svelte';
	import { siteConfig } from '$lib/config/site-config';

	let { children } = $props();
	useSiteConfig(() => siteConfig);

    // Use the native View Transitions API for smooth page transitions
	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>


<MetaData />

<Header />

<main class:centered={page.route.id === '/'}>
	{@render children()}
</main>

<style>
	main {
		min-height: 100dvh;
	}

	main.centered {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
