<script lang="ts">
	import { Card, Heading, Li, List } from 'flowbite-svelte';
	import { m } from '$lib/paraglide/messages';

	const services = [
		{
			title: m['servicesContent.software.title'](),
			points: [
				m['servicesContent.software.p1'](),
				m['servicesContent.software.p2'](),
				m['servicesContent.software.p3'](),
				m['servicesContent.software.p4']()
			]
		},
		{
			title: m['servicesContent.admin.title'](),
			points: [
				m['servicesContent.admin.p1'](),
				m['servicesContent.admin.p2'](),
				m['servicesContent.admin.p3'](),
				m['servicesContent.admin.p4'](),
				m['servicesContent.admin.p5']()
			]
		},
		{
			title: m['servicesContent.consulting.title'](),
			points: [
				m['servicesContent.consulting.p1'](),
				m['servicesContent.consulting.p2'](),
				m['servicesContent.consulting.p3']()
			]
		},
		{
			title: m['servicesContent.support.title'](),
			points: [
				m['servicesContent.support.p1'](),
				m['servicesContent.support.p2'](),
				m['servicesContent.support.p3']()
			]
		}
	];
</script>

<Heading tag="h2" class="mb-8">{m['servicesContent.headline']()}</Heading>
<div class="grid gap-8 md:grid-cols-2">
	{#each services as s (s.title)}
		<Card size="xl" class="p-8">
			<Heading tag="h3" class="mb-4 hyphens-auto break-words">{s.title}</Heading>
			<List>
				{#each s.points as p (p)}
					<Li>{p}</Li>
				{/each}
			</List>
		</Card>
	{/each}
</div>
