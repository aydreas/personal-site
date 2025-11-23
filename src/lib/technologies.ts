import type { ComponentProps } from 'svelte';
import { Badge } from 'flowbite-svelte';

type Color = ComponentProps<typeof Badge>['color'];

export type TechnologyCategory = {
	label: string;
};

export const technologyCategories = {
	frontend: {
		label: 'Frontend'
	},
	backend: {
		label: 'Backend'
	},
	devops: {
		label: 'Cloud & Infrastructure'
	},
	database: {
		label: 'Datenbanken'
	},
	qa: {
		label: 'Testing & QA'
	},
	sysadmin: {
		label: 'Systemadministration'
	}
} satisfies Record<string, TechnologyCategory>;

export type Technology = {
	category: keyof typeof technologyCategories;
	label: string;
	color: Color;
	description: string;
	icon: string;
};

export const technologies = {
	typescript: {
		category: 'frontend',
		label: 'TypeScript',
		color: 'blue',
		description: 'Typisiert JS',
		icon: 'SiTypescript'
	},
	vue: {
		category: 'frontend',
		label: 'Vue.js',
		color: 'green',
		description: 'Progressives Framework',
		icon: 'SiVuedotjs'
	},
	react: {
		category: 'frontend',
		label: 'React',
		color: 'blue',
		description: 'Komponenten UI',
		icon: 'SiReact'
	},
	nestjs: {
		category: 'backend',
		label: 'NestJS',
		color: 'red',
		description: 'Modulares API Framework',
		icon: 'SiNestjs'
	},
	angular: {
		category: 'frontend',
		label: 'Angular',
		color: 'red',
		description: 'Enterprise Frontend',
		icon: 'SiAngular'
	},
	spring: {
		category: 'backend',
		label: 'Java Spring',
		color: 'green',
		description: 'Java Microservices',
		icon: 'SiSpring'
	},
	grafana: {
		category: 'devops',
		label: 'Grafana',
		color: 'orange',
		description: 'Metrics Dashboards',
		icon: 'SiGrafana'
	},
	docker: {
		category: 'devops',
		label: 'Docker',
		color: 'blue',
		description: 'Container Plattform',
		icon: 'SiDocker'
	},
	kubernetes: {
		category: 'devops',
		label: 'Kubernetes',
		color: 'blue',
		description: 'Container Orchestrierung',
		icon: 'SiKubernetes'
	},
	jest: {
		category: 'qa',
		label: 'Jest',
		color: 'purple',
		description: 'JS Test-Framework',
		icon: 'SiJest'
	},
	postgresql: {
		category: 'database',
		label: 'PostgreSQL',
		color: 'blue',
		description: 'Relationale DB',
		icon: 'SiPostgresql'
	},
	mysql: {
		category: 'database',
		label: 'MySQL',
		color: 'amber',
		description: 'Relationale DB',
		icon: 'SiMysql'
	},
	mongodb: {
		category: 'database',
		label: 'MongoDB',
		color: 'green',
		description: 'Dokumenten DB',
		icon: 'SiMongodb'
	},
	dotnet: {
		category: 'backend',
		label: '.NET',
		color: 'purple',
		description: '.NET Plattform',
		icon: 'SiDotnet'
	},
	php: {
		category: 'backend',
		label: 'PHP',
		color: 'primary',
		description: 'Web Skriptsprache',
		icon: 'SiPhp'
	},
	linux: {
		category: 'sysadmin',
		label: 'Linux',
		color: 'primary',
		description: 'Server OS',
		icon: 'SiLinux'
	},
	bash: {
		category: 'sysadmin',
		label: 'Bash',
		color: 'primary',
		description: 'Shell Skripting',
		icon: 'SiGnubash'
	},
	influx: {
		category: 'database',
		label: 'InfluxDB',
		color: 'blue',
		description: 'Zeitreihen DB',
		icon: 'SiInfluxdb'
	},
	prometheus: {
		category: 'devops',
		label: 'Prometheus',
		color: 'orange',
		description: 'Metrics Monitoring',
		icon: 'SiPrometheus'
	},
	proxmox: {
		category: 'sysadmin',
		label: 'Proxmox',
		color: 'orange',
		description: 'Virtualisierung',
		icon: 'SiProxmox'
	},
	zfs: {
		category: 'sysadmin',
		label: 'ZFS',
		color: 'green',
		description: 'Fortschrittliches FS',
		icon: 'MdStorage'
	},
	opnsense: {
		category: 'sysadmin',
		label: 'OPNsense',
		color: 'red',
		description: 'Firewall Plattform',
		icon: 'MdSecurity'
	},
	azure: {
		category: 'devops',
		label: 'Azure',
		color: 'blue',
		description: 'Cloud Dienste',
		icon: 'SiMicrosoftazure'
	}
} satisfies Record<string, Technology>;
