<script>
	import ExternalLink from '$lib/components/ExternalLink.svelte';
	import GithubIcon from '$lib/images/github-icon.svelte';
	import XIcon from '$lib/images/x-icon.svelte';
</script>

<nav class="social-links">
	<ExternalLink href="" title="GitHub">
		<GithubIcon size={28} />
	</ExternalLink>

	<ExternalLink href="" title="Twitter">
		<XIcon size={28} />
	</ExternalLink>
</nav>

<style>
	.social-links {
		display: flex;
		gap: 0.75rem;
	}
</style>
