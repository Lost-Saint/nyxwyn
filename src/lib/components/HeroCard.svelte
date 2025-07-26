<script lang="ts">
	import About from '$lib/components/About.svelte';
	import SocialIcons from '$lib/components/SocialIcons.svelte';
</script>

<div class="herocard">
	<h1 class="herocard-title">Lost Saint</h1>
	<About />
	<SocialIcons />
</div>

<style>
	.herocard {
		--_spacing: 0.25rem;
		min-width: 320px;
		max-width: 48rem;
		margin-inline: auto;
		padding-inline: calc(var(--_spacing) * 6);
		padding-bottom: calc(var(--_spacing) * 10);
		color: white;
		font-family:
			ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace;
	}

	.herocard-title {
		font-size: 2.25rem;
		line-height: 2.5rem;
		font-weight: 700;
	}
</style>
