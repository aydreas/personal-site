<script lang="ts">
	import { Badge, Heading, Li, List, P, Timeline, TimelineItem } from 'flowbite-svelte';
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

	const experience: Entry[] = [
		{
			company: 'Self Employed',
			role: 'Independent IT Consultant & Developer',
			period: 'Oct 2025 – Present',
			initials: 'SE',
			placeholder: { bg: 'bg-gray-200', text: 'text-gray-700', textSize: 'text-[10px]' },
			description: 'Providing freelance IT consulting and software development services',
			badges: [
				{ label: 'Consulting', color: 'primary' },
				{ label: 'Development', color: 'pink' }
			]
		},
		{
			company: 'Bitberry',
			role: 'DevOps Technical Lead',
			period: 'Apr 2023 – Oct 2025',
			location: 'Vienna, Austria',
			initials: 'BB',
			placeholder: { bg: 'bg-purple-100', text: 'text-purple-700', textSize: 'text-xs' },
			details: [
				'Led design, implementation and maintenance of CI/CD pipelines',
				'Improved code quality and deployment workflows',
				'Managed development and production infrastructure'
			],
			badges: [
				{ label: 'CI/CD', color: 'purple' },
				{ label: 'DevOps', color: 'primary' },
				{ label: 'Infrastructure', color: 'green' }
			]
		},
		{
			company: 'Bitberry',
			role: 'Full Stack Engineer',
			period: 'Sep 2021 – Oct 2025',
			location: 'Vienna, Austria',
			initials: 'BB',
			placeholder: { bg: 'bg-purple-100', text: 'text-purple-700', textSize: 'text-xs' },
			details: ['Developed and designed software projects'],
			badges: [
				{ label: 'Full Stack', color: 'amber' },
				{ label: 'Web', color: 'primary' }
			]
		},
		{
			company: 'Corestad',
			role: 'Software Engineer',
			period: 'Jun 2021 – Aug 2021',
			location: 'Vienna, Austria',
			initials: 'CS',
			placeholder: { bg: 'bg-indigo-100', text: 'text-indigo-700', textSize: 'text-xs' },
			details: ['Developed web applications and advised on server infrastructure'],
			badges: [
				{ label: 'Web', color: 'primary' },
				{ label: 'Consulting', color: 'indigo' }
			]
		},
		{
			company: 'NAVAX',
			role: 'IT-Administrator',
			period: 'Aug 2018 – Dec 2020',
			location: 'Vienna, Austria',
			initials: 'NX',
			placeholder: { bg: 'bg-gray-100', text: 'text-gray-700', textSize: 'text-xs' },
			details: [
				'Administered Windows, Linux and Microsoft 365 environments',
				'Built internal tools to improve infrastructure efficiency'
			],
			badges: [
				{ label: 'Windows', color: 'gray' },
				{ label: 'Linux', color: 'gray' },
				{ label: 'Automation', color: 'green' }
			]
		},
		{
			company: 'NAVAX',
			role: 'Information Technology Intern',
			period: 'Jul 2018',
			location: 'Vienna, Austria',
			initials: 'NX',
			placeholder: { bg: 'bg-gray-100', text: 'text-gray-700', textSize: 'text-xs' },
			description: 'Short-term IT department internship',
			badges: [{ label: 'Internship', color: 'gray' }]
		},
		{
			company: 'Buchhaltungsagentur des Bundes',
			role: 'Information Technology Intern',
			period: 'Aug 2018',
			location: 'Vienna, Austria',
			initials: 'BDB',
			placeholder: { bg: 'bg-rose-100', text: 'text-rose-700', textSize: 'text-[10px]' },
			description: 'Short-term IT department internship',
			badges: [{ label: 'Internship', color: 'gray' }]
		}
	];

	function buildExperienceTitle(e: Entry) {
		return `${e.role} · ${e.company}${e.location ? ` (${e.location})` : ''}`;
	}
</script>

<Heading tag="h2" class="mb-8">Beruflicher Werdegang</Heading>
<Timeline>
	{#each experience as e (e.period)}
		<TimelineItem date={e.period} title={buildExperienceTitle(e)}>
			<div class="flex gap-4">
				<div
					class={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${e.placeholder.bg} ${e.placeholder.text} ${e.placeholder.textSize || 'text-xs'}`}
					aria-hidden="true"
				>
					{e.initials}
				</div>
				<div class="grow">
					{#if e.details}
						<List class="list-disc ml-5 space-y-1">
							{#each e.details as d (d)}<Li>{d}</Li>{/each}
						</List>
					{/if}
					{#if e.description}<P class="mb-2">{e.description}</P>{/if}
					{#if e.badges}
						<div class="mt-3 flex flex-wrap gap-2">
							{#each e.badges as b (b.label)}<Badge color={b.color}>{b.label}</Badge>{/each}
						</div>
					{/if}
				</div>
			</div>
		</TimelineItem>
	{/each}
</Timeline>
