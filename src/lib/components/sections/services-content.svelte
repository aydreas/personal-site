<script lang="ts">
	import { Card, Heading, Li, List } from 'flowbite-svelte';

	const services = [
		{
			title: 'Softwareentwicklung & Automatisierung',
			points: ['Individuelle Anwendungen', 'API-Integrationen', 'Skripte', 'Prozessoptimierungen']
		},
		{
			title: 'Systemadministration & Infrastruktur',
			points: [
				'Betreuung bestehender Systeme',
				'Monitoring',
				'Security-Checks',
				'Cloud-Einrichtung (AWS/Azure/GCP)',
				'Containerisierung',
				'CI/CD'
			]
		},
		{
			title: 'IT-Consulting & Architekturberatung',
			points: [
				'Technische Entscheidungsbegleitung',
				'Evaluierung neuer Tools',
				'Modernisierung bestehender Systeme'
			]
		},
		{
			title: 'Support & Troubleshooting',
			points: [
				'Schnelle Problemlösungen Remote oder vor Ort',
				'Fehlersuche',
				'Stabilisierung von Systemen'
			]
		}
	];
</script>

<Heading tag="h2" class="mb-8">Meine Kernleistungen</Heading>
<div class="grid gap-8 md:grid-cols-2">
	{#each services as s (s.title)}
		<Card size="xl" class="p-8">
			<Heading tag="h3" class="mb-4">{s.title}</Heading>
			<List>
				{#each s.points as p (p)}
					<Li>{p}</Li>
				{/each}
			</List>
		</Card>
	{/each}
</div>
