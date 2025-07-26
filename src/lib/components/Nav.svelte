<header class="header">
	<div class="header__container">
		<a href="/" class="header__home-link" aria-label="Home">
			<svg
				fill="fillCurrent"
				width="40px"
				height="40px"
				viewBox="0 -64 640 640"
				xmlns="http://www.w3.org/2000/svg"
				class="svelte-12uj798"
				><path
					d="M18.32 255.78L192 223.96l-91.28 68.69c-10.08 10.08-2.94 27.31 11.31 27.31h222.7c-9.44-26.4-14.73-54.47-14.73-83.38v-42.27l-119.73-87.6c-23.82-15.88-55.29-14.01-77.06 4.59L5.81 227.64c-12.38 10.33-3.45 30.42 12.51 28.14zm556.87 34.1l-100.66-50.31A47.992 47.992 0 0 1 448 196.65v-36.69h64l28.09 22.63c6 6 14.14 9.37 22.63 9.37h30.97a32 32 0 0 0 28.62-17.69l14.31-28.62a32.005 32.005 0 0 0-3.02-33.51l-74.53-99.38C553.02 4.7 543.54 0 533.47 0H296.02c-7.13 0-10.7 8.57-5.66 13.61L352 63.96 292.42 88.8c-5.9 2.95-5.9 11.36 0 14.31L352 127.96v108.62c0 72.08 36.03 139.39 96 179.38-195.59 6.81-344.56 41.01-434.1 60.91C5.78 478.67 0 485.88 0 494.2 0 504 7.95 512 17.76 512h499.08c63.29.01 119.61-47.56 122.99-110.76 2.52-47.28-22.73-90.4-64.64-111.36zM489.18 66.25l45.65 11.41c-2.75 10.91-12.47 18.89-24.13 18.26-12.96-.71-25.85-12.53-21.52-29.67z"
				></path></svg
			>
		</a>
		<nav class="header__nav">
			<a href="/about" class="header__nav-link">about</a>
			<a href="/projects" class="header__nav-link">projects</a>
		</nav>
	</div>
</header>

<style>
	.header {
		position: fixed;
		top: 2rem;
		left: 50%;
		transform: translateX(-50%);
		width: calc(100% - 4rem);
		max-width: 56rem;
		z-index: 1000;
		transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
	}

	.header__container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.6rem 1.5rem;
		background: rgba(255, 255, 255, 0.08);
		backdrop-filter: blur(16px);
		border: 1px solid rgba(255, 255, 255, 0.15);
		border-radius: 2rem;
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
	}

	.header__home-link {
		display: flex;
		align-items: center;
		color: rgba(255, 255, 255, 0.9);
		text-decoration: none;
		transition: color 200ms ease;
	}

	.header__home-link:hover {
		color: #fff;
	}

	.header__nav {
		display: flex;
		gap: 1.5rem;
	}

	.header__nav-link {
		color: rgba(255, 255, 255, 0.7);
		text-decoration: none;
		font-weight: 500;
		padding: 0.5rem 1rem;
		border-radius: 1rem;
		transition: all 200ms ease;
		position: relative;
	}

	.header__nav-link:hover {
		color: #fff;
		background: rgba(255, 255, 255, 0.1);
	}

	/* Mobile optimizations */
	@media (max-width: 832px) {
		.header {
			top: auto;
			bottom: 2rem;
		}

		.header__container {
			padding: 0.6rem 1.25rem;
		}

		.header__nav {
			gap: 1rem;
		}
	}

	@media (max-width: 480px) {
		.header {
			bottom: 1rem;
			left: 1rem;
			right: 1rem;
			width: auto;
			transform: none;
		}

		.header__container {
			padding: 0.65rem 1rem;
			gap: 0.5rem;
		}

		.header__nav {
			gap: 0.75rem;
		}

		.header__nav-link {
			padding: 0.4rem 0.8rem;
			font-size: 0.9rem;
		}
	}
</style>
