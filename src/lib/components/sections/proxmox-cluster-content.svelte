<script lang="ts">
	import { Card, Heading, P, Badge } from 'flowbite-svelte';
	import type { ComponentProps } from 'svelte';
	import { technologies } from '$lib/technologies';
	import { m } from '$lib/paraglide/messages';
	import RackImage from '$lib/assets/images/server/rack.webp';
	import ProxmoxImage from '$lib/assets/images/server/proxmox_dashboard.png';

	const highlights: { label: string; color?: ComponentProps<typeof Badge>['color'] }[] = [
		{ label: m['proxmoxCluster.highlights.haCluster'](), color: 'primary' },
		{ label: m['proxmoxCluster.highlights.replicationFailover'](), color: 'blue' },
		{ label: m['proxmoxCluster.highlights.segmentedNetworking'](), color: 'red' },
		{ label: m['proxmoxCluster.highlights.storage'](), color: 'green' },
		{ label: m['proxmoxCluster.highlights.backups'](), color: 'amber' },
		{ label: m['proxmoxCluster.highlights.monitoring'](), color: 'indigo' },
		{ label: m['proxmoxCluster.highlights.provisioning'](), color: 'purple' },
		{ label: m['proxmoxCluster.highlights.kubernetes'](), color: 'cyan' }
	];

	const techTags: (keyof typeof technologies)[] = [
		'proxmox',
		'linux',
		'zfs',
		'docker',
		'ansible',
		'prometheusGrafana',
		'opnsense',
		'githubActions'
	];

	const images: { src: string; alt: string }[] = [
		{ src: RackImage, alt: m['proxmoxCluster.imagesAlt.rack']() },
		{ src: ProxmoxImage, alt: m['proxmoxCluster.imagesAlt.dashboard']() }
	];
</script>

<Card size="xl" class="p-8 flex flex-col gap-8">
	<!-- Header -->
	<div class="flex flex-col md:flex-row md:items-center gap-6">
		<div class="flex flex-wrap md:flex-nowrap items-center gap-4">
			<i class="devicon-proxmox-plain-wordmark text-6xl" aria-hidden="true"></i>
			<Heading tag="h3">{m['proxmoxCluster.title']()}</Heading>
		</div>
	</div>

	<!-- Intro -->
	<div class="space-y-4">
		<P>
			{m['proxmoxCluster.introP1']()}
		</P>
		<P>
			{m['proxmoxCluster.introP2']()}
		</P>
	</div>

	<!-- Highlights & Technologies Grid -->
	<div class="grid gap-8 md:grid-cols-2">
		<div>
			<Heading tag="h4" class="text-base mb-3">{m['proxmoxCluster.highlightsHeadline']()}</Heading>
			<div class="flex flex-wrap gap-2">
				{#each highlights as highlight (highlight.label)}
					<Badge color={highlight.color}>{highlight.label}</Badge>
				{/each}
			</div>
		</div>
		<div>
			<Heading tag="h4" class="text-base mb-3">{m['proxmoxCluster.technologiesHeadline']()}</Heading
			>
			<div class="flex flex-wrap gap-2">
				{#each techTags as tech (tech)}
					<Badge color={technologies[tech].color}>{technologies[tech].label}</Badge>
				{/each}
			</div>
		</div>
	</div>

	<!-- Screenshots -->
	<div class="space-y-3">
		<Heading tag="h4" class="text-base">{m['proxmoxCluster.screenshotsHeadline']()}</Heading>
		<div class="relative">
			<div class="grid grid-cols-1 gap-4 md:grid-cols-4">
				{#each images as img (img.src)}
					<img src={img.src} alt={img.alt} class="h-96 rounded-lg" loading="lazy" />
				{/each}
			</div>
		</div>
	</div>
</Card>
