<script lang="ts">
	import { Timeline, TimelineItem, Heading, P, Badge } from 'flowbite-svelte';
	import type { ComponentProps } from 'svelte';

	type Entry = {
		company?: string; // institution for education
		institution?: string; // alt field for education
		role?: string;
		degree?: string;
		period: string; // displayed in date
		location?: string;
		initials: string; // placeholder logo text
		placeholder: { bg: string; text: string; textSize?: string };
		details?: string[]; // bullet points
		description?: string; // single paragraph
		badges?: { label: string; color?: ComponentProps<typeof Badge>['color'] }[];
	};

	const education: Entry[] = [
		{
			institution: 'Technische Universität Wien',
			degree: 'B.Sc. Informatics',
			period: '2021 – 2025',
			initials: 'TUW',
			placeholder: { bg: 'bg-primary-100', text: 'text-primary-700', textSize: 'text-[10px]' },
			description: 'Bachelor of Science (B.Sc.) in Informatics',
			badges: [{ label: 'Bachelor', color: 'primary' }]
		},
		{
			institution: 'HTL Rennweg',
			degree: 'Matura Information Technology',
			period: '2015 – 2020',
			initials: 'HTL',
			placeholder: { bg: 'bg-green-100', text: 'text-green-700', textSize: 'text-xs' },
			description: 'Matura in Information Technology',
			badges: [{ label: 'Matura', color: 'green' }]
		}
	];

	function buildEducationTitle(e: Entry) {
		return `${e.degree} · ${e.institution}`;
	}
</script>

<Heading tag="h2" class="mb-8">Ausbildung</Heading>
<Timeline>
	{#each education as ed (ed.institution)}
		<TimelineItem date={ed.period} title={buildEducationTitle(ed)}>
			<div class="flex gap-4">
				<div
					class={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-semibold ${ed.placeholder.bg} ${ed.placeholder.text} ${ed.placeholder.textSize || 'text-xs'}`}
					aria-hidden="true"
				>
					{ed.initials}
				</div>
				<div class="grow">
					{#if ed.description}<P>{ed.description}</P>{/if}
					{#if ed.badges}
						<div class="mt-2 flex flex-wrap gap-2">
							{#each ed.badges as b (b.label)}<Badge color={b.color}>{b.label}</Badge>{/each}
						</div>
					{/if}
				</div>
			</div>
		</TimelineItem>
	{/each}
</Timeline>
