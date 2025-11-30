import type { ComponentProps } from 'svelte';
import { Badge } from 'flowbite-svelte';

type Color = ComponentProps<typeof Badge>['color'];

export type TechnologyCategory = {
	label: string;
};

export const technologyCategories = {
	frontend: {
		label: 'Frontend UI & Frameworks'
	},
	backend: {
		label: 'Backend & APIs'
	},
	devops: {
		label: 'Cloud & Infrastructure'
	},
	database: {
		label: 'Data & Storage'
	},
	languages: {
		label: 'Programming languages'
	},
	sysadmin: {
		label: 'Platform & OS'
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
		description: 'Structured scalable APIs',
		icon: 'devicon-nestjs-original'
	},
	spring: {
		category: 'backend',
		label: 'Java Spring',
		color: 'green',
		description: 'Robust enterprise microservices',
		icon: 'devicon-spring-original'
	},
	dotnet: {
		category: 'backend',
		label: '.NET / ASP.NET',
		color: 'purple',
		description: 'Cross-platform web power',
		icon: 'devicon-dot-net-plain'
	},
	nodejs: {
		category: 'backend',
		label: 'Node.js',
		color: 'green',
		description: 'Fast server-side JavaScript',
		icon: 'devicon-nodejs-plain'
	},
	graphql: {
		category: 'backend',
		label: 'GraphQL',
		color: 'pink',
		description: 'Efficient data fetching',
		icon: 'devicon-graphql-plain'
	},

	// database
	postgresql: {
		category: 'database',
		label: 'PostgreSQL',
		color: 'blue',
		description: 'Reliable relational engine',
		icon: 'devicon-postgresql-plain'
	},
	mysql: {
		category: 'database',
		label: 'MySQL',
		color: 'amber',
		description: 'Proven relational workhorse',
		icon: 'devicon-mysql-original'
	},
	mongodb: {
		category: 'database',
		label: 'MongoDB',
		color: 'green',
		description: 'Flexible document storage',
		icon: 'devicon-mongodb-plain'
	},
	influx: {
		category: 'database',
		label: 'InfluxDB',
		color: 'blue',
		description: 'Time-series insights fast',
		icon: 'devicon-influxdb-original'
	},
	zfs: {
		category: 'database',
		label: 'ZFS',
		color: 'green',
		description: 'Resilient storage management',
		icon: 'icon-zfs'
	},
	redis: {
		category: 'database',
		label: 'Redis',
		color: 'red',
		description: 'Blazing in-memory speed',
		icon: 'devicon-redis-plain'
	},

	// devops
	docker: {
		category: 'devops',
		label: 'Docker & Kubernetes',
		color: 'blue',
		description: 'Portable scalable containers',
		icon: 'devicon-docker-plain'
	},
	azure: {
		category: 'devops',
		label: 'Azure',
		color: 'blue',
		description: 'Enterprise cloud services',
		icon: 'devicon-azure-plain'
	},
	ansible: {
		category: 'devops',
		label: 'Ansible',
		color: 'red',
		description: 'Simple automation at scale',
		icon: 'devicon-ansible-plain'
	},
	proxmox: {
		category: 'devops',
		label: 'Proxmox',
		color: 'orange',
		description: 'Efficient virtualization platform',
		icon: 'devicon-proxmox-plain-wordmark'
	},
	prometheusGrafana: {
		category: 'devops',
		label: 'Prometheus & Grafana',
		color: 'orange',
		description: 'Actionable metrics monitoring',
		icon: 'devicon-grafana-plain'
	},
	githubActions: {
		category: 'devops',
		label: 'GitHub Actions',
		color: 'gray',
		description: 'Streamlined CI/CD pipelines',
		icon: 'devicon-githubactions-plain'
	},

	// frontend
	vue: {
		category: 'frontend',
		label: 'Vue.js / Nuxt.js',
		color: 'green',
		description: 'Elegant progressive UI',
		icon: 'devicon-vuejs-plain'
	},
	react: {
		category: 'frontend',
		label: 'React / Next.js',
		color: 'blue',
		description: 'Reusable component-driven UI',
		icon: 'devicon-react-original'
	},
	angular: {
		category: 'frontend',
		label: 'Angular',
		color: 'red',
		description: 'Full-featured enterprise frontend',
		icon: 'devicon-angular-plain'
	},
	svelte: {
		category: 'frontend',
		label: 'Svelte / SvelteKit',
		color: 'orange',
		description: 'Lightning-fast compiled UI',
		icon: 'devicon-svelte-plain'
	},

	// languages
	php: {
		category: 'languages',
		label: 'PHP',
		color: 'primary',
		description: 'Fast server-side web',
		icon: 'devicon-php-plain'
	},
	javascript: {
		category: 'languages',
		label: 'JavaScript',
		color: 'yellow',
		description: 'Universal web language',
		icon: 'devicon-javascript-plain'
	},
	typescript: {
		category: 'languages',
		label: 'TypeScript',
		color: 'blue',
		description: 'Safer scalable JavaScript',
		icon: 'devicon-typescript-plain'
	},
	java: {
		category: 'languages',
		label: 'Java',
		color: 'orange',
		description: 'Reliable cross-platform apps',
		icon: 'devicon-java-plain'
	},
	cpp: {
		category: 'languages',
		label: 'C / C++',
		color: 'blue',
		description: 'High-performance systems code',
		icon: 'devicon-cplusplus-plain'
	},
	csharp: {
		category: 'languages',
		label: 'C#',
		color: 'purple',
		description: 'Versatile Microsoft language',
		icon: 'devicon-csharp-plain'
	},

	// sysadmin
	linux: {
		category: 'sysadmin',
		label: 'Linux',
		color: 'primary',
		description: 'Stable secure server OS',
		icon: 'devicon-linux-plain'
	},
	bash: {
		category: 'sysadmin',
		label: 'Bash',
		color: 'primary',
		description: 'Automate with shell scripts',
		icon: 'devicon-bash-plain'
	},
	opnsense: {
		category: 'sysadmin',
		label: 'pfSense / OPNsense',
		color: 'red',
		description: 'Powerful open firewall',
		icon: 'devicon-pfsense-original'
	},

	// Windows administration
	activeDirectory: {
		category: 'sysadmin',
		label: 'Active Directory',
		color: 'blue',
		description: 'Centralized identity management',
		icon: 'devicon-windows11-original'
	},
	powershell: {
		category: 'sysadmin',
		label: 'PowerShell',
		color: 'blue',
		description: 'Scriptable admin automation',
		icon: 'devicon-powershell-plain'
	}
} satisfies Record<string, Technology>;
