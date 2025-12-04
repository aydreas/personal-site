<script lang="ts">
	import { Heading } from 'flowbite-svelte';
	import Experiences, { type ExperienceEntry } from '$lib/components/experiences.svelte';

	const education: ExperienceEntry[] = [
		{
			company: 'Technische Universität Wien',
			role: 'B.Sc. Informatics',
			period: '2021 – 2025',
			initials: 'TUW',
			description: 'Bachelor of Science (B.Sc.) in Informatics',
			badges: [{ label: 'Bachelor', color: 'primary' }]
		},
		{
			company: 'HTL Rennweg',
			role: 'Matura Information Technology',
			period: '2015 – 2020',
			initials: 'HTL',
			description: 'Matura in Information Technology',
			badges: [{ label: 'Matura', color: 'green' }]
		}
	];
</script>

<Heading tag="h2" class="mb-8">Ausbildung</Heading>
<Experiences entries={education}></Experiences>
