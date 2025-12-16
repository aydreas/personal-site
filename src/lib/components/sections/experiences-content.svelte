<script lang="ts">
	import { Heading } from 'flowbite-svelte';
	import Experiences, { type ExperienceEntry } from '$lib/components/experiences.svelte';
	import { m } from '$lib/paraglide/messages';
	import BitberryLogo from '$lib/assets/images/bitberry.jpeg';
	import NavaxLogo from '$lib/assets/images/navax.jpeg';
	import CorestadLogo from '$lib/assets/images/corestad.webp';
	import BDBLogo from '$lib/assets/images/bdb.jpeg';

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
				'docker',
				'azure',
				'ansible',
				'proxmox',
				'prometheusGrafana',
				'githubActions',
				'zfs',
				'influx',
				'linux'
			]
		},
		{
			company: m['experiences.BBLead.company'](),
			role: m['experiences.BBLead.role'](),
			period: m['experiences.BBLead.period'](),
			location: m['experiences.BBLead.location'](),
			initials: 'BB',
			image: BitberryLogo,
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
			image: BitberryLogo,
			details: [
				m['experiences.BBDev.details.1'](),
				m['experiences.BBDev.details.2'](),
				m['experiences.BBDev.details.3']()
			],
			badges: [
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
			image: CorestadLogo,
			details: [m['experiences.CS.details.1'](), m['experiences.CS.details.2']()],
			badges: ['nodejs', 'vue', 'mongodb', 'mysql', 'docker', 'linux', 'graphql']
		},
		{
			company: m['experiences.NXAdmin.company'](),
			role: m['experiences.NXAdmin.role'](),
			period: m['experiences.NXAdmin.period'](),
			location: m['experiences.NXAdmin.location'](),
			initials: 'NX',
			image: NavaxLogo,
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
			image: NavaxLogo,
			description: m['experiences.NXIntern.description'](),
			badges: ['activeDirectory', 'powershell', 'linux', 'javascript']
		},
		{
			company: m['experiences.BDBIntern.company'](),
			role: m['experiences.BDBIntern.role'](),
			period: m['experiences.BDBIntern.period'](),
			location: m['experiences.BDBIntern.location'](),
			initials: 'BDB',
			image: BDBLogo,
			description: m['experiences.BDBIntern.description'](),
			badges: ['activeDirectory', 'powershell', 'javascript']
		}
	];
</script>

<Heading tag="h2" class="mb-8">{m['experiences.headline']()}</Heading>
<Experiences entries={experiences}></Experiences>
