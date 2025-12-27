<script lang="ts">
	import { Badge, Li, List, P, Timeline, TimelineItem } from 'flowbite-svelte';
	import { technologies } from '$lib/technologies';
	import type { ComponentProps } from 'svelte';
	import Avatar from '$lib/components/avatar.svelte';

	type Color = ComponentProps<typeof Badge>['color'];

	export type ExperienceEntry = {
		company?: string; // institution for education
		role?: string; // degree for education
		period: string; // displayed in date
		location?: string;
		initials: string; // placeholder logo text
		image?: string; // logo image
		details?: string[]; // bullet points
		description?: string; // single paragraph
		badges?: (keyof typeof technologies | { label: string; color: Color })[];
	};

	const { entries }: { entries: ExperienceEntry[] } = $props();

	function buildExperienceTitle(e: ExperienceEntry) {
		return `${e.role} · ${e.company}${e.location ? ` (${e.location})` : ''}`;
	}

	function getBadges(e: ExperienceEntry) {
		return e.badges?.map((b) => (typeof b === 'string' ? technologies[b] : b)) || [];
	}
</script>

<Timeline>
	{#each entries as e (e.period)}
		<TimelineItem
			date={e.period}
			title={buildExperienceTitle(e)}
			timeClass="text-gray-500 dark:text-gray-400"
		>
			<div class="flex gap-4 mt-2">
				<Avatar class="shrink-0" initials={e.initials} src={e.image}></Avatar>
				<div class="grow">
					{#if e.details}
						<List class="list-disc ml-4 space-y-1">
							{#each e.details as d (d)}<Li>{d}</Li>{/each}
						</List>
					{/if}
					{#if e.description}
						<P class="mb-2">{e.description}</P>
					{/if}
					<div class="mt-3 flex flex-wrap gap-2">
						{#each getBadges(e) as b (b)}
							<Badge color={b.color}>{b.label}</Badge>
						{/each}
					</div>
				</div>
			</div>
		</TimelineItem>
	{/each}
</Timeline>
