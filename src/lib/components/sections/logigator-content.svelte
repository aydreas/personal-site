<script lang="ts">
	import { A, Card, Heading, P, Badge, Button } from 'flowbite-svelte';
	import type { ComponentProps } from 'svelte';
	import { m } from '$lib/paraglide/messages.js';
	import logigatorLogo from '$lib/assets/images/logigator.svg';
	import logigatorLightLogo from '$lib/assets/images/logigator_light.svg';
	import { technologies } from '$lib/technologies';

	const highlights: { label: string; color?: ComponentProps<typeof Badge>['color'] }[] = [
		{ label: m['logigator.highlights.interactive'](), color: 'primary' },
		{ label: m['logigator.highlights.editor'](), color: 'secondary' },
		{ label: m['logigator.highlights.hierarchical'](), color: 'purple' },
		{ label: m['logigator.highlights.share'](), color: 'amber' },
		{ label: m['logigator.highlights.simulation'](), color: 'red' },
		{ label: m['logigator.highlights.openSource'](), color: 'green' }
	];

	const techTags: (keyof typeof technologies)[] = [
		'typescript',
		'angular',
		'cpp',
		'docker',
		'githubActions',
		'mysql',
		'nodejs',
		'redis'
	];
</script>

<Card size="xl" class="p-8 flex flex-col gap-8">
	<!-- Header -->
	<div class="flex flex-col md:flex-row md:items-center gap-6">
		<div class="flex flex-wrap md:flex-nowrap items-center gap-4">
			<img
				src={logigatorLogo}
				alt="Logigator Logo"
				class="dark:hidden block w-48 h-12"
				loading="lazy"
			/>
			<img
				src={logigatorLightLogo}
				alt="Logigator Logo"
				class="hidden dark:block w-48 h-12"
				loading="lazy"
			/>
			<Heading tag="h3">{m['logigator.title']()}</Heading>
		</div>
	</div>

	<!-- Intro -->
	<P>
		{m['logigator.intro']()}
	</P>

	<!-- Highlights & Technologies Grid -->
	<div class="grid gap-8 md:grid-cols-2">
		<div>
			<Heading tag="h4" class="text-base mb-3">{m['logigator.highlightsHeadline']()}</Heading>
			<div class="flex flex-wrap gap-2">
				{#each highlights as highlight (highlight.label)}
					<Badge color={highlight.color}>{highlight.label}</Badge>
				{/each}
			</div>
		</div>
		<div>
			<Heading tag="h4" class="text-base mb-3">{m['logigator.technologiesHeadline']()}</Heading>
			<div class="flex flex-wrap gap-2">
				{#each techTags as tech (tech)}
					<Badge color={technologies[tech].color}>{technologies[tech].label}</Badge>
				{/each}
			</div>
		</div>
	</div>

	<!-- Education & Recognition -->
	<div class="space-y-4">
		<Heading tag="h3">{m['logigator.educationHeadline']()}</Heading>
		<P>{m['logigator.educationP1']()}</P>
		<P>{m['logigator.educationP2']()}</P>
		<div class="flex flex-wrap gap-4 pt-2">
			<A
				href={m['logigator.links.ct.href']()}
				target="_blank"
				rel="noopener noreferrer external"
				aria-label={m['logigator.links.ct.aria']()}>{m['logigator.links.ct.label']()}</A
			>
			<A
				href={m['logigator.links.schoolbook.href']()}
				target="_blank"
				rel="noopener noreferrer external"
				aria-label={m['logigator.links.schoolbook.aria']()}
				>{m['logigator.links.schoolbook.label']()}</A
			>
		</div>
	</div>

	<!-- Actions -->
	<div class="mt-2 flex flex-wrap gap-4">
		<Button
			tag="a"
			href={m['logigator.actions.website.href']()}
			rel="noopener noreferrer external"
			target="_blank"
			color="primary">{m['logigator.actions.website.label']()}</Button
		>
		<Button
			tag="a"
			href={m['logigator.actions.github.href']()}
			rel="noopener noreferrer external"
			target="_blank"
			color="light">{m['logigator.actions.github.label']()}</Button
		>
	</div>
</Card>
