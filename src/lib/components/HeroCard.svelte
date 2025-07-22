<script lang="ts">
	import About from '$lib/components/About.svelte';
	import SocialIcons from '$lib/components/SocialIcons.svelte';
</script>

<div class="herocard">
	<h1 class="herocard__title">Hello</h1>
	<About />
	<SocialIcons />
</div>

<style>
	.herocard {
		min-width: 320px;
		max-width: 48rem; /* max-w-3xl */
		margin-inline: auto;
		padding: 0 1.5rem 2.5rem; /* px-6 pb-10 */
		color: white;
		font-family:
			ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace;
	}

	.herocard__title {
		font-size: 2.25rem; /* text-4xl */
		line-height: 2.5rem;
		font-weight: 700; /* font-bold */
	}
</style>
