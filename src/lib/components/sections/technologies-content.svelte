<script lang="ts">
	import { Card, Heading } from 'flowbite-svelte';
	import CardFlip from '$lib/components/card-flip.svelte';
	import { technologies, technologyCategories } from '$lib/technologies';

	function getTechnologyByCategory(category: string) {
		return Object.values(technologies).filter((t) => t.category === category);
	}
</script>

<Heading tag="h2" class="mb-8">Technologien &amp; Tools</Heading>
<div class="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
	{#each Object.entries(technologyCategories) as [categoryKey, category] (categoryKey)}
		<Card size="lg" class="p-6">
			<Heading tag="h3" class="mb-4 text-lg">{category.label}</Heading>
			<div class="flex flex-wrap justify-around gap-4">
				{#each getTechnologyByCategory(categoryKey) as t (t.label)}
					<CardFlip name={t.label} description={t.description} icon={t.icon} />
				{/each}
			</div>
		</Card>
	{/each}
</div>
