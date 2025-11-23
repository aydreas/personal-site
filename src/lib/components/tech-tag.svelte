<script lang="ts">
	import { Badge } from 'flowbite-svelte';
	import type { ComponentProps } from 'svelte';

	type Color = ComponentProps<typeof Badge>['color'];

	const labels = {
		typescript: { label: 'TypeScript', color: 'blue' },
		svelte: { label: 'Svelte', color: 'red' },
		sveltekit: { label: 'SvelteKit', color: 'red' },
		python: { label: 'Python', color: 'green' },
		docker: { label: 'Docker', color: 'blue' },
		kubernetes: { label: 'Kubernetes', color: 'blue' },
		aws: { label: 'AWS', color: 'orange' },
		'ci/cd': { label: 'CI/CD', color: 'purple' },
		devops: { label: 'DevOps', color: 'primary' },
		infrastructure: { label: 'Infrastructure', color: 'green' },
		fullstack: { label: 'Full Stack', color: 'amber' },
		web: { label: 'Web', color: 'primary' }
	} satisfies { [key: string]: { label: string; color: Color } };

	export let tech: keyof typeof labels;
</script>

<Badge color={labels[tech].color}>{labels[tech].label}</Badge>
