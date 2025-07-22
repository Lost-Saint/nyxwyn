<script lang="ts">
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';

	interface Props extends HTMLAnchorAttributes {
		href: string;
		title: string;
		children: Snippet;
	}

	let { href, title, children, ...restProps }: Props = $props();
</script>

<a
	{href}
	aria-label={title}
	title={`Go to my ${title}`}
	target="_blank"
	rel="noopener noreferrer"
	class="external-link"
	{...restProps}
>
	{@render children()}
</a>

<style>
	.external-link {
		justify-content: center;
		align-items: center;
		display: flex;
		padding: 0.875rem;
		background-color: rgb(30 41 59);
		border-radius: 0.75rem;
		transition: opacity 0.15s ease-in-out;
	}

	.external-link:hover {
		opacity: 0.5;
	}
</style>
