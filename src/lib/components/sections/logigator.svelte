<script lang="ts">
	import { A, Card, Heading, P, Badge, Button } from 'flowbite-svelte';
	import type { ComponentProps } from 'svelte';
	import TechTag from '$lib/components/tech-tag.svelte';
	import { m } from '$lib/paraglide/messages.js';

	const features: { label: string; color?: ComponentProps<typeof Badge>['color'] }[] = [
		{ label: 'Interaktive Logiksimulation', color: 'primary' },
		{ label: 'Schaltungseditor mit Drag & Drop', color: 'cyan' },
		{ label: 'Hierarchische Bausteine / ICs', color: 'purple' },
		{ label: 'Bibliothek & Teilen von Projekten', color: 'indigo' },
		{ label: 'Echtzeit-Auswertung', color: 'pink' },
		{ label: 'Open Source', color: 'green' }
	];
</script>

<Heading tag="h2" class="mb-8">{m['logigator.headline']()}</Heading>
<Card size="xl" class="p-8 flex flex-col gap-8">
	<!-- Header -->
	<div class="flex flex-col md:flex-row md:items-center gap-6">
		<div class="flex flex-wrap md:flex-nowrap items-center gap-4">
			<img
				src="https://logigator.com/assets/logo.svg"
				alt="Logigator Logo"
				class="dark:hidden block w-48 h-12"
				loading="lazy"
			/>
			<img
				src="https://logigator.com/assets/logo_light.svg"
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
				{#each features as tFeature (tFeature.label)}<Badge color={tFeature.color}
						>{tFeature.label}</Badge
					>{/each}
			</div>
		</div>
		<div>
			<Heading tag="h4" class="text-base mb-3">{m['logigator.technologiesHeadline']()}</Heading>
			<div class="flex flex-wrap gap-2">
				<TechTag tech="devops"></TechTag>
				<TechTag tech="docker"></TechTag>
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
				rel="noopener noreferrer"
				aria-label={m['logigator.links.ct.aria']()}>{m['logigator.links.ct.label']()}</A
			>
			<A
				href={m['logigator.links.schoolbook.href']()}
				target="_blank"
				rel="noopener noreferrer"
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
			rel="noopener noreferrer"
			target="_blank"
			color="primary">{m['logigator.actions.website.label']()}</Button
		>
		<Button
			tag="a"
			href={m['logigator.actions.github.href']()}
			rel="noopener noreferrer"
			target="_blank"
			color="light">{m['logigator.actions.github.label']()}</Button
		>
	</div>
</Card>
