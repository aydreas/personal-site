import type { ComponentProps } from 'svelte';
import { Badge } from 'flowbite-svelte';
import { m } from '$lib/paraglide/messages';

type Color = ComponentProps<typeof Badge>['color'];

export type TechnologyCategory = {
	label: string;
};

export const technologyCategories = {
	frontend: {
		label: m['technologies.categories.frontend']({})
	},
	backend: {
		label: m['technologies.categories.backend']({})
	},
	devops: {
		label: m['technologies.categories.devops']({})
	},
	database: {
		label: m['technologies.categories.database']({})
	},
	languages: {
		label: m['technologies.categories.languages']({})
	},
	sysadmin: {
		label: m['technologies.categories.sysadmin']({})
	}
} satisfies Record<string, TechnologyCategory>;

export type Technology = {
	category: keyof typeof technologyCategories;
	label: string;
	color: Color;
	description: string;
	icon?: string;
};

export const technologies = {
	// backend
	nestjs: {
		category: 'backend',
		label: 'NestJS',
		color: 'red',
		description: m['technologies.descriptions.nestjs']({}),
		icon: 'devicon-nestjs-original'
	},
	spring: {
		category: 'backend',
		label: 'Java Spring',
		color: 'green',
		description: m['technologies.descriptions.spring']({}),
		icon: 'devicon-spring-original'
	},
	dotnet: {
		category: 'backend',
		label: '.NET / ASP.NET',
		color: 'purple',
		description: m['technologies.descriptions.dotnet']({}),
		icon: 'devicon-dot-net-plain'
	},
	nodejs: {
		category: 'backend',
		label: 'Node.js',
		color: 'green',
		description: m['technologies.descriptions.nodejs']({}),
		icon: 'devicon-nodejs-plain'
	},
	graphql: {
		category: 'backend',
		label: 'GraphQL',
		color: 'pink',
		description: m['technologies.descriptions.graphql']({}),
		icon: 'devicon-graphql-plain'
	},

	// database
	postgresql: {
		category: 'database',
		label: 'PostgreSQL',
		color: 'blue',
		description: m['technologies.descriptions.postgresql']({}),
		icon: 'devicon-postgresql-plain'
	},
	mysql: {
		category: 'database',
		label: 'MySQL',
		color: 'amber',
		description: m['technologies.descriptions.mysql']({}),
		icon: 'devicon-mysql-original'
	},
	mongodb: {
		category: 'database',
		label: 'MongoDB',
		color: 'green',
		description: m['technologies.descriptions.mongodb']({}),
		icon: 'devicon-mongodb-plain'
	},
	influx: {
		category: 'database',
		label: 'InfluxDB',
		color: 'blue',
		description: m['technologies.descriptions.influx']({}),
		icon: 'devicon-influxdb-original'
	},
	zfs: {
		category: 'database',
		label: 'ZFS',
		color: 'green',
		description: m['technologies.descriptions.zfs']({}),
		icon: 'icon-zfs'
	},
	redis: {
		category: 'database',
		label: 'Redis',
		color: 'red',
		description: m['technologies.descriptions.redis']({}),
		icon: 'devicon-redis-plain'
	},

	// devops
	docker: {
		category: 'devops',
		label: 'Docker & Kubernetes',
		color: 'blue',
		description: m['technologies.descriptions.docker']({}),
		icon: 'devicon-docker-plain'
	},
	azure: {
		category: 'devops',
		label: 'Azure',
		color: 'blue',
		description: m['technologies.descriptions.azure']({}),
		icon: 'devicon-azure-plain'
	},
	ansible: {
		category: 'devops',
		label: 'Ansible',
		color: 'red',
		description: m['technologies.descriptions.ansible']({}),
		icon: 'devicon-ansible-plain'
	},
	proxmox: {
		category: 'devops',
		label: 'Proxmox',
		color: 'orange',
		description: m['technologies.descriptions.proxmox']({}),
		icon: 'devicon-proxmox-plain-wordmark'
	},
	prometheusGrafana: {
		category: 'devops',
		label: 'Prometheus & Grafana',
		color: 'orange',
		description: m['technologies.descriptions.prometheusGrafana']({}),
		icon: 'devicon-grafana-plain'
	},
	githubActions: {
		category: 'devops',
		label: 'GitHub Actions',
		color: 'gray',
		description: m['technologies.descriptions.githubActions']({}),
		icon: 'devicon-githubactions-plain'
	},

	// frontend
	vue: {
		category: 'frontend',
		label: 'Vue.js / Nuxt.js',
		color: 'green',
		description: m['technologies.descriptions.vue']({}),
		icon: 'devicon-vuejs-plain'
	},
	react: {
		category: 'frontend',
		label: 'React / Next.js',
		color: 'blue',
		description: m['technologies.descriptions.react']({}),
		icon: 'devicon-react-original'
	},
	angular: {
		category: 'frontend',
		label: 'Angular',
		color: 'red',
		description: m['technologies.descriptions.angular']({}),
		icon: 'devicon-angular-plain'
	},
	svelte: {
		category: 'frontend',
		label: 'Svelte / SvelteKit',
		color: 'orange',
		description: m['technologies.descriptions.svelte']({}),
		icon: 'devicon-svelte-plain'
	},

	// languages
	php: {
		category: 'languages',
		label: 'PHP',
		color: 'primary',
		description: m['technologies.descriptions.php']({}),
		icon: 'devicon-php-plain'
	},
	javascript: {
		category: 'languages',
		label: 'JavaScript',
		color: 'yellow',
		description: m['technologies.descriptions.javascript']({}),
		icon: 'devicon-javascript-plain'
	},
	typescript: {
		category: 'languages',
		label: 'TypeScript',
		color: 'blue',
		description: m['technologies.descriptions.typescript']({}),
		icon: 'devicon-typescript-plain'
	},
	java: {
		category: 'languages',
		label: 'Java',
		color: 'orange',
		description: m['technologies.descriptions.java']({}),
		icon: 'devicon-java-plain'
	},
	cpp: {
		category: 'languages',
		label: 'C / C++',
		color: 'blue',
		description: m['technologies.descriptions.cpp']({}),
		icon: 'devicon-cplusplus-plain'
	},
	csharp: {
		category: 'languages',
		label: 'C#',
		color: 'purple',
		description: m['technologies.descriptions.csharp']({}),
		icon: 'devicon-csharp-plain'
	},

	// sysadmin
	linux: {
		category: 'sysadmin',
		label: 'Linux',
		color: 'primary',
		description: m['technologies.descriptions.linux']({}),
		icon: 'devicon-linux-plain'
	},
	bash: {
		category: 'sysadmin',
		label: 'Bash',
		color: 'primary',
		description: m['technologies.descriptions.bash']({}),
		icon: 'devicon-bash-plain'
	},
	opnsense: {
		category: 'sysadmin',
		label: 'pfSense / OPNsense',
		color: 'red',
		description: m['technologies.descriptions.opnsense']({}),
		icon: 'devicon-pfsense-original'
	},

	// Windows administration
	activeDirectory: {
		category: 'sysadmin',
		label: 'Active Directory',
		color: 'blue',
		description: m['technologies.descriptions.activeDirectory']({}),
		icon: 'devicon-windows11-original'
	},
	powershell: {
		category: 'sysadmin',
		label: 'PowerShell',
		color: 'blue',
		description: m['technologies.descriptions.powershell']({}),
		icon: 'devicon-powershell-plain'
	}
} satisfies Record<string, Technology>;
