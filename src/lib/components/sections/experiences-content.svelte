<script lang="ts">
	import { Heading } from 'flowbite-svelte';
	import Experiences, { type ExperienceEntry } from '$lib/components/experiences.svelte';

	const experiences: ExperienceEntry[] = [
		{
			company: 'Self Employed',
			role: 'Independent IT Consultant & Developer',
			period: 'Oct 2025 – Present',
			initials: 'SE',
			description: 'Providing freelance IT consulting and software development services',
			badges: [
				'typescript',
				'java',
				'vue',
				'svelte',
				'nestjs',
				'nodejs',
				'graphql',
				'docker',
				'azure',
				'ansible',
				'proxmox',
				'prometheusGrafana',
				'githubActions',
				'zfs',
				'influx',
				'linux',
				'bash',
				'opnsense'
			]
		},
		{
			company: 'Bitberry',
			role: 'DevOps Technical Lead',
			period: 'Apr 2023 – Oct 2025',
			location: 'Vienna, Austria',
			initials: 'BB',
			details: [
				'Led design, implementation and maintenance of CI/CD pipelines',
				'Improved code quality and deployment workflows',
				'Managed development and production infrastructure'
			],
			badges: [
				'docker',
				'azure',
				'ansible',
				'proxmox',
				'prometheusGrafana',
				'githubActions',
				'zfs',
				'influx',
				'linux',
				'bash'
			]
		},
		{
			company: 'Bitberry',
			role: 'Full Stack Engineer',
			period: 'Sep 2021 – Oct 2025',
			location: 'Vienna, Austria',
			initials: 'BB',
			details: ['Developed and designed software projects'],
			badges: [
				'javascript',
				'typescript',
				'java',
				'vue',
				'react',
				'nestjs',
				'spring',
				'nodejs',
				'graphql',
				'mongodb',
				'mysql',
				'postgresql',
				'redis',
				'docker'
			]
		},
		{
			company: 'Corestad',
			role: 'Software Engineer',
			period: 'Jun 2021 – Aug 2021',
			location: 'Vienna, Austria',
			initials: 'CS',
			details: ['Developed web applications and advised on server infrastructure'],
			badges: ['nodejs', 'vue', 'mongodb', 'mysql', 'docker', 'linux', 'graphql']
		},
		{
			company: 'NAVAX',
			role: 'IT-Administrator',
			period: 'Aug 2018 – Dec 2020',
			location: 'Vienna, Austria',
			initials: 'NX',
			details: [
				'Administered Windows, Linux and Microsoft 365 environments',
				'Built internal tools to improve infrastructure efficiency'
			],
			badges: [
				'azure',
				'activeDirectory',
				'powershell',
				'linux',
				'bash',
				'java',
				'spring',
				'csharp',
				'dotnet',
				'mysql'
			]
		},
		{
			company: 'NAVAX',
			role: 'Information Technology Intern',
			period: 'Jul 2018',
			location: 'Vienna, Austria',
			initials: 'NX',
			description: 'Short-term IT department internship',
			badges: ['activeDirectory', 'powershell', 'linux', 'javascript']
		},
		{
			company: 'Buchhaltungsagentur des Bundes',
			role: 'Information Technology Intern',
			period: 'Aug 2018',
			location: 'Vienna, Austria',
			initials: 'BDB',
			description: 'Short-term IT department internship',
			badges: ['activeDirectory', 'powershell', 'javascript']
		}
	];
</script>

<Heading tag="h2" class="mb-8">Beruflicher Werdegang</Heading>
<Experiences entries={experiences}></Experiences>
