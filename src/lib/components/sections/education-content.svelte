<script lang="ts">
	import { Heading } from 'flowbite-svelte';
	import Experiences, { type ExperienceEntry } from '$lib/components/experiences.svelte';
	import { m } from '$lib/paraglide/messages';
	import TuWienLogo from '$lib/assets/images/tuwien.jpeg';
	import HtlLogo from '$lib/assets/images/htl.jpeg';

	const education: ExperienceEntry[] = [
		{
			company: m['education.tuw.company'](),
			role: m['education.tuw.role'](),
			period: m['education.tuw.period'](),
			initials: 'TUW',
			image: TuWienLogo,
			description: m['education.tuw.description'](),
			badges: [{ label: 'Bachelor', color: 'primary' }]
		},
		{
			company: m['education.htl.company'](),
			role: m['education.htl.role'](),
			period: m['education.htl.period'](),
			initials: 'HTL',
			image: HtlLogo,
			description: m['education.htl.description'](),
			badges: [{ label: 'Matura', color: 'green' }]
		}
	];
</script>

<Heading tag="h2" class="mb-8">{m['education.headline']()}</Heading>
<Experiences entries={education}></Experiences>
