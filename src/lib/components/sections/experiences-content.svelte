<script lang="ts">
	import { Heading } from 'flowbite-svelte';
	import Experiences, { type ExperienceEntry } from '$lib/components/experiences.svelte';
	import { m } from '$lib/paraglide/messages';

	const experiences: ExperienceEntry[] = [
		{
			company: m['experiences.SE.company'](),
			role: m['experiences.SE.role'](),
			period: m['experiences.SE.period'](),
			initials: 'SE',
			description: m['experiences.SE.description'](),
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
			company: m['experiences.BBLead.company'](),
			role: m['experiences.BBLead.role'](),
			period: m['experiences.BBLead.period'](),
			location: m['experiences.BBLead.location'](),
			initials: 'BB',
			details: [
				m['experiences.BBLead.details.1'](),
				m['experiences.BBLead.details.2'](),
				m['experiences.BBLead.details.3']()
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
			company: m['experiences.BBDev.company'](),
			role: m['experiences.BBDev.role'](),
			period: m['experiences.BBDev.period'](),
			location: m['experiences.BBDev.location'](),
			initials: 'BB',
			details: [m['experiences.BBDev.details.1']()],
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
			company: m['experiences.CS.company'](),
			role: m['experiences.CS.role'](),
			period: m['experiences.CS.period'](),
			location: m['experiences.CS.location'](),
			initials: 'CS',
			details: [m['experiences.CS.details.1']()],
			badges: ['nodejs', 'vue', 'mongodb', 'mysql', 'docker', 'linux', 'graphql']
		},
		{
			company: m['experiences.NXAdmin.company'](),
			role: m['experiences.NXAdmin.role'](),
			period: m['experiences.NXAdmin.period'](),
			location: m['experiences.NXAdmin.location'](),
			initials: 'NX',
			details: [m['experiences.NXAdmin.details.1'](), m['experiences.NXAdmin.details.2']()],
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
			company: m['experiences.NXIntern.company'](),
			role: m['experiences.NXIntern.role'](),
			period: m['experiences.NXIntern.period'](),
			location: m['experiences.NXIntern.location'](),
			initials: 'NX',
			description: m['experiences.NXIntern.description'](),
			badges: ['activeDirectory', 'powershell', 'linux', 'javascript']
		},
		{
			company: m['experiences.BDBIntern.company'](),
			role: m['experiences.BDBIntern.role'](),
			period: m['experiences.BDBIntern.period'](),
			location: m['experiences.BDBIntern.location'](),
			initials: 'BDB',
			description: m['experiences.BDBIntern.description'](),
			badges: ['activeDirectory', 'powershell', 'javascript']
		}
	];
</script>

<Heading tag="h2" class="mb-8">{m['experiences.headline']()}</Heading>
<Experiences entries={experiences}></Experiences>
