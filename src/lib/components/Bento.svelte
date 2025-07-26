<script lang="ts">
	import { onMount } from 'svelte';

	// TypeScript interfaces
	interface Profile {
		name: string;
		role: string;
		location: string;
		bio: string;
		quote: string;
	}

	interface Activity {
		user: string;
		displayName: string;
		status: string;
		message: string;
	}

	interface TechStack {
		backend: string[];
		frontend: string[];
		devops: string[];
	}

	interface Contact {
		icon: string;
		label: string;
		href: string;
	}

	interface CurrentSong {
		title: string;
		artist: string;
		album: string;
	}

	// Profile data
	const profile: Profile = {
		name: 'Lost Saint',
		role: 'Software Developer',
		location: 'United States',
		bio: "Hi, I'm Lost Saint. I'm a software developer from Nepal who loves building innovative solutions and bringing ideas to life through code. I specialize in full-stack development, creating everything from interactive visualizers and games to enterprise applications.",
		quote: 'The internet can still be fun.'
	};

	// Activity data
	const activity: Activity = {
		user: '@Taboo',
		displayName: 'Taboo',
		status: 'Offline',
		message: "I'm not up to anything"
	};

	// Tech stack data
	const techStack: TechStack = {
		backend: ['Go', 'Python', 'PostgreSQL'],
		frontend: ['SvelteKit', 'TypeScript'],
		devops: ['Docker', 'Linux', 'Git', 'AWS']
	};

	// Contact links
	const contacts: Contact[] = [{ icon: '📧', label: 'Email', href: 'mailto:anish@example.com' }];

	// Music data
	const currentSong: CurrentSong = {
		title: 'Blue Jeans',
		artist: 'HANA',
		album: 'Blue Jeans (Single)'
	};

	// Reactive variables
	let mounted = false;

	// Generate initials
	const getInitials = (name: string): string => {
		return name
			.split(' ')
			.map((n) => n[0])
			.join('');
	};

	onMount(() => {
		mounted = true;
	});
</script>

<div class="container" class:mounted>
	<!-- Profile Card -->
	<div class="bento-card profile">
		<div class="profile-content">
			<div class="profile-header">
				<div class="avatar">
					{getInitials(profile.name)}
				</div>
				<div class="profile-info">
					<h1>{profile.name}</h1>
					<div class="role">🚀 {profile.role}</div>
					<div class="location">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							><line x1="2" x2="5" y1="12" y2="12"></line><line x1="19" x2="22" y1="12" y2="12"
							></line><line x1="12" x2="12" y1="2" y2="5"></line><line
								x1="12"
								x2="12"
								y1="19"
								y2="22"
							></line><circle cx="12" cy="12" r="7"></circle></svg
						>
						{profile.location}
					</div>
				</div>
			</div>
			<div class="bio">
				{profile.bio}
			</div>
			<div class="quote">
				"{profile.quote}"
			</div>
		</div>
	</div>

	<!-- Activity Card -->
	<div class="bento-card activity">
		<div class="activity-content">
			<h2 class="section-title">Activity</h2>
			<div class="activity-item">
				<div class="activity-avatar">
					{getInitials(activity.displayName)}
				</div>
				<div>
					<div><strong>{activity.user}</strong></div>
					<div class="activity-status">{activity.displayName} • {activity.status}</div>
					<div class="activity-message">
						"{activity.message}"
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Connect Card -->
	<div class="bento-card connect">
		<h2 class="section-title">Connect</h2>
		<div class="contact-links">
			{#each contacts as contact (contact.label)}
				<a href={contact.href} class="contact-link">
					<span class="contact-icon">{contact.icon}</span>
					<span>{contact.label}</span>
				</a>
			{/each}
		</div>
	</div>

	<!-- Tech Stack -->
	<div class="tech-stack">
		<div class="tech-header">
			<h2 class="section-title no-spacing">🔧 Tech Stack</h2>
		</div>
		<div class="tech-categories">
			<div class="tech-category">
				<h3>Backend</h3>
				<div class="tech-items">
					{#each techStack.backend as tech (tech)}
						<div class="tech-item">{tech}</div>
					{/each}
				</div>
			</div>
			<div class="tech-category">
				<h3>Frontend</h3>
				<div class="tech-items">
					{#each techStack.frontend as tech (tech)}
						<div class="tech-item">{tech}</div>
					{/each}
				</div>
			</div>
			<div class="tech-category">
				<h3>DevOps</h3>
				<div class="tech-items">
					{#each techStack.devops as tech (tech)}
						<div class="tech-item">{tech}</div>
					{/each}
				</div>
			</div>
			<div class="tech-category extra">
				<h3>Tools & More</h3>
				<div class="tech-items">
					<div class="tech-item">VS Code</div>
					<div class="tech-item">Figma</div>
					<div class="tech-item">Postman</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Music Card -->
	<div class="bento-card music">
		<div class="music-content">
			<h2 class="section-title">🎵 Music</h2>
			<div class="music-info">
				<div class="album-art">
					{currentSong.artist.charAt(0)}
				</div>
				<div class="song-info">
					<div class="song-title">{currentSong.title}</div>
					<div class="artist">{currentSong.artist}</div>
					<div class="album">{currentSong.album}</div>
				</div>
			</div>
			<div class="recently-played">My most recently scrobbled song</div>
		</div>
	</div>
</div>

<style>
	:root {
		--bg-primary: #0a0a0a;
		--bg-secondary: #1a1a1a;
		--bg-tertiary: #2a2a2a;
		--border-color: #333;
		--text-primary: #fff;
		--text-secondary: #ccc;
		--text-muted: #888;
		--accent-color: #ff6b6b;
		--accent-secondary: #4ecdc4;
		--accent-tertiary: #45b7d1;
		--gradient-1: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		--gradient-2: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
		--gradient-3: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
		--gradient-4: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
	}

	.container {
		--max-size: min(100vw - 2rem, 1400px);
		--cols: 16;
		--rows: 12;

		max-width: var(--max-size);
		margin: 0 auto;
		display: grid;
		grid-template-columns: repeat(var(--cols), 1fr);
		grid-template-rows: repeat(var(--rows), minmax(60px, 1fr));
		gap: 0.75rem;
		height: calc(100vh - 8rem);
		padding-top: 7rem;
		container: bento / inline-size;
		opacity: 0;
		transform: translateY(20px);
		transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
	}
	.container.mounted {
		opacity: 1;
		transform: translateY(0);
	}

	.bento-card {
		background: var(--bg-secondary);
		border: 1px solid var(--border-color);
		border-radius: 16px;
		padding: 1.5rem;
		transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
		overflow: hidden;
		position: relative;
		display: flex;
		flex-direction: column;
		min-height: 0;
	}
	.bento-card:hover,
	.tech-header:hover,
	.tech-category:hover {
		transform: translateY(-2px);
		border-color: var(--accent-color);
		box-shadow: 0 10px 20px rgba(255, 107, 107, 0.1);
	}

	/* ✅ Cards with overlays */
	.profile,
	.activity,
	.music {
		position: relative;
		overflow: hidden;
		color: white;
	}
	.profile::before,
	.activity::before,
	.music::before {
		content: '';
		position: absolute;
		inset: 0;
		background: rgba(0, 0, 0, 0.3);
		z-index: 1;
	}

	.profile {
		grid-column: span 10;
		grid-row: span 6;
		background: var(--gradient-1);
	}
	.profile-content {
		position: relative;
		z-index: 2;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	.profile-header {
		display: flex;
		align-items: center;
		gap: 1.5rem;
		margin-bottom: 2rem;
	}
	.avatar,
	.activity-avatar,
	.album-art {
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: bold;
		color: white;
		flex-shrink: 0;
	}
	.avatar {
		width: 80px;
		height: 80px;
		border-radius: 50%;
		background: var(--gradient-2);
		font-size: 2rem;
	}
	.profile-info h1 {
		font-size: clamp(1.5rem, 4cqi, 2.5rem);
		font-weight: 700;
		margin: 0 0 0.5rem 0;
		color: white;
	}
	.role {
		color: var(--accent-color);
		font-size: 1.1rem;
		font-weight: 600;
	}
	.location {
		color: rgba(255, 255, 255, 0.7);
		font-size: 0.9rem;
		margin-top: 0.25rem;
	}
	.bio {
		font-size: clamp(0.9rem, 2.5cqi, 1.1rem);
		color: rgba(255, 255, 255, 0.9);
		line-height: 1.6;
		margin-bottom: auto;
	}
	.quote {
		font-style: italic;
		color: rgba(255, 255, 255, 0.8);
		padding: 1rem;
		border-left: 3px solid var(--accent-color);
		background: rgba(255, 255, 255, 0.1);
		border-radius: 0 8px 8px 0;
		backdrop-filter: blur(10px);
		margin-top: 1rem;
	}

	.activity {
		grid-column: span 6;
		grid-row: span 3;
		background: var(--gradient-3);
	}
	.activity-content {
		position: relative;
		z-index: 2;
	}
	.section-title {
		font-size: 1.2rem;
		font-weight: 700;
		margin-bottom: 1rem;
		color: white;
	}
	.activity-item {
		display: flex;
		align-items: center;
		gap: 1rem;
	}
	.activity-avatar {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background: var(--gradient-4);
	}
	.activity-status {
		color: rgba(255, 255, 255, 0.7);
		font-size: 0.9rem;
	}
	.activity-message {
		color: rgba(255, 255, 255, 0.9);
		font-style: italic;
		margin-top: 0.5rem;
	}

	.tech-stack {
		grid-column: span 10;
		grid-row: span 6;
		display: grid;
		grid-template-columns: subgrid;
		grid-template-rows: subgrid;
		padding: 0;
		gap: 0.75rem;
		background: transparent;
		border: none;
		grid-template-rows: auto;
		grid-auto-rows: auto;
	}
	.tech-header {
		grid-column: span 10;
		grid-row: span 1;
		background: var(--bg-secondary);
		border: 1px solid var(--border-color);
		border-radius: 16px;
		padding: 1.5rem;
		display: flex;
		align-items: center;
		transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
	}
	.tech-categories {
		display: contents;
	}
	.tech-category {
		grid-column: span 2;
		grid-row: span 5;
		background: var(--bg-secondary);
		border: 1px solid var(--border-color);
		border-radius: 16px;
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
	}
	.tech-category.extra {
		grid-column: span 4;
	}
	.tech-category h3 {
		color: var(--accent-color);
		font-size: 0.85rem;
		text-transform: uppercase;
		letter-spacing: 1px;
		margin: 0 0 1rem 0;
		font-weight: 600;
	}
	.tech-items {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		flex: 1;
	}
	.tech-item {
		background: var(--bg-tertiary);
		border: 1px solid var(--border-color);
		padding: 0.75rem 1rem;
		border-radius: 8px;
		font-size: 0.9rem;
		color: var(--text-secondary);
		transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
		cursor: pointer;
	}
	.tech-item:hover {
		background: var(--accent-color);
		color: white;
		transform: translateX(4px);
		border-color: var(--accent-color);
	}

	.connect {
		grid-column: span 6;
		grid-row: span 3;
	}
	.contact-links {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-top: 1rem;
	}
	.contact-link {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1rem;
		background: var(--bg-tertiary);
		border-radius: 8px;
		text-decoration: none;
		color: var(--text-secondary);
		transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
		border: 1px solid var(--border-color);
	}
	.contact-link:hover {
		background: var(--accent-color);
		color: white;
		transform: translateX(4px);
		border-color: var(--accent-color);
	}
	.contact-icon {
		font-size: 1.2rem;
	}

	.music {
		grid-column: span 6;
		grid-row: span 6;
		background: var(--gradient-4);
		min-height: 200px;
	}
	.music-content {
		position: relative;
		z-index: 2;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.music-info {
		display: flex;
		align-items: flex-start;
		gap: 1rem;
		margin: 1rem 0;
		flex: 1;
	}
	.album-art {
		width: 60px;
		height: 60px;
		border-radius: 8px;
		background: var(--gradient-2);
		font-size: 1.5rem;
	}
	.song-info {
		flex: 1;
		min-width: 0;
		overflow: hidden;
	}
	.song-title {
		font-weight: 600;
		margin-bottom: 0.25rem;
		color: white;
		font-size: clamp(0.9rem, 2.5cqi, 1rem);
		line-height: 1.3;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.artist {
		color: rgba(255, 255, 255, 0.8);
		font-size: clamp(0.8rem, 2.2cqi, 0.9rem);
		line-height: 1.3;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.album {
		color: rgba(255, 255, 255, 0.6);
		font-size: clamp(0.7rem, 2cqi, 0.8rem);
		margin-top: 0.25rem;
		line-height: 1.3;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.recently-played {
		color: rgba(255, 255, 255, 0.7);
		font-size: clamp(0.75rem, 2cqi, 0.85rem);
		margin-top: auto;
		padding-top: 1rem;
		flex-shrink: 0;
	}
	.no-spacing {
		margin: 0;
	}

	/* ✅ Responsive */
	@media (max-width: 1024px) {
		.container {
			--cols: 12;
			--rows: 16;
			padding-top: 1rem;
			padding-bottom: 7rem;
		}
		.profile {
			grid-column: span 12;
			grid-row: span 6;
		}
		.activity,
		.connect {
			grid-column: span 6;
			grid-row: span 3;
		}
		.tech-stack,
		.tech-header {
			grid-column: span 12;
		}
		.tech-category,
		.tech-category.extra {
			grid-column: span 3;
			grid-row: span 3;
		}
		.music {
			grid-column: span 12;
			grid-row: span 4;
			min-height: 180px;
		}
		.album-art {
			width: 50px;
			height: 50px;
			font-size: 1.3rem;
		}
	}
	@media (max-width: 768px) {
		.container {
			--cols: 8;
			--rows: 20;
			padding-top: 1rem;
			padding-bottom: 7rem;
			grid-template-rows: auto;
			grid-auto-rows: auto;
			height: auto;
		}
		.bento-card {
			padding: 1rem;
		}
		.profile,
		.activity,
		.connect,
		.music {
			grid-column: span 8;
			grid-row: span 3;
		}
		.profile {
			grid-row: span 6;
		}
		.tech-stack {
			grid-column: span 8;
			grid-row: span 6;
			display: flex;
			flex-direction: column;
			gap: 0.75rem;
		}
		.tech-categories {
			display: flex;
			flex-direction: column;
			gap: 0.75rem;
		}
		.music {
			min-height: auto;
			height: auto;
		}
		.profile-header {
			flex-direction: column;
			text-align: center;
			gap: 1rem;
		}
		.avatar {
			width: 60px;
			height: 60px;
			font-size: 1.5rem;
		}
		.album-art {
			width: 45px;
			height: 45px;
			font-size: 1.2rem;
		}
	}
	@media (max-width: 480px) {
		.music {
			min-height: 140px;
		}
		.music-info {
			gap: 0.5rem;
		}
		.album-art {
			width: 40px;
			height: 40px;
			font-size: 1rem;
		}
		.song-title,
		.artist,
		.album {
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			max-width: 100%;
		}
	}
</style>
