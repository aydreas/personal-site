<script lang="ts">
	import Container from '$lib/components/container.svelte';
	import Section from '$lib/components/section.svelte';
	import { Card, Button, Heading, P, List, Li } from 'flowbite-svelte';

	const intro =
		'Ich unterstütze Unternehmen als flexibler IT-Dienstleister mit Fokus auf Softwareentwicklung, Systemadministration und technischer Beratung. Ob Entwicklung von Anwendungen, Aufbau moderner Cloud-Infrastrukturen oder zuverlässiger IT-Support – ich liefere pragmatische, skalierbare Lösungen, die direkt im Tagesgeschäft spürbar helfen. Ich arbeite auf Stunden- oder Projektbasis, ermögliche schnelle Reaktionszeiten und passe mich exakt den Anforderungen deines Unternehmens an. Für Startups, KMU und bestehende IT-Teams bin ich ein zuverlässiger Partner, der sowohl kurzfristige Engpässe überbrückt als auch langfristige technische Weiterentwicklung unterstützt.';

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

	const usp = [
		'Transparente Stundenabrechnung',
		'Flexible Zusammenarbeit – von kleinen Ad-hoc-Aufgaben bis zu größeren Projekten',
		'Fachlich breit aufgestellt, zuverlässig und lösungsorientiert',
		'Ideal für kleine und mittlere Unternehmen, die professionelle IT brauchen, ohne interne Kapazitäten aufzubauen'
	];
</script>

<!-- Hero -->
<Section variant="dark">
	<Container>
		<Heading tag="h1" class="mb-6 tracking-tight text-white">
			Flexibler IT-Dienstleister für Entwicklung & Infrastruktur
		</Heading>
		<P class="text-white">{intro}</P>
		<div class="mt-8 flex flex-wrap gap-4">
			<Button color="primary">Kontakt aufnehmen</Button>
			<Button color="light">Leistungen ansehen</Button>
		</div>
	</Container>
</Section>

<!-- Leistungen -->
<Section>
	<Container>
		<Heading tag="h2" class="mb-8">Meine Kernleistungen</Heading>
		<div class="grid gap-8 md:grid-cols-2">
			{#each services as s}
				<Card size="xl" class="p-8 h-64">
					<Heading tag="h3" class="mb-4">{s.title}</Heading>
					<List>
						{#each s.points as p}
							<Li>{p}</Li>
						{/each}
					</List>
				</Card>
			{/each}
		</div>
	</Container>
</Section>

<!-- Call to action -->
<Section variant="dark">
	<Container class="text-center">
		<Heading tag="h2" class="text-white mb-4">Bereit für den nächsten Schritt?</Heading>
		<P class="text-center text-white mb-8">
			Lass uns unverbindlich über deine aktuelle Herausforderung sprechen – oft genügt schon ein
			kurzer Austausch für erste klare Ansätze.
		</P>
		<Button size="lg">Unverbindlich anfragen</Button>
	</Container>
</Section>
