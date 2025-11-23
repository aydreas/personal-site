<script lang="ts">
	import { A, Card, Heading, P, Badge, Button } from 'flowbite-svelte';
	import type { ComponentProps } from 'svelte';
	import TechTag from '$lib/components/tech-tag.svelte';

	const features: { label: string; color?: ComponentProps<typeof Badge>['color'] }[] = [
		{ label: 'Interaktive Logiksimulation', color: 'primary' },
		{ label: 'Schaltungseditor mit Drag & Drop', color: 'cyan' },
		{ label: 'Hierarchische Bausteine / ICs', color: 'purple' },
		{ label: 'Bibliothek & Teilen von Projekten', color: 'indigo' },
		{ label: 'Echtzeit-Auswertung', color: 'pink' },
		{ label: 'Open Source', color: 'green' }
	];
</script>

<Heading tag="h2" class="mb-8">Sometimes, personal projects tell the best stories</Heading>
<Card size="xl" class="p-8 flex flex-col gap-8">
	<!-- Header -->
	<div class="flex flex-col md:flex-row md:items-center gap-6">
		<div class="flex items-center gap-4">
			<img
				src="https://logigator.com/assets/logo_light.svg"
				alt="Logigator Logo"
				class="w-48 h-12"
			/>
			<Heading tag="h3">Logigator: Digitale Logik einfach lernen & anwenden</Heading>
		</div>
	</div>

	<!-- Intro -->
	<P>
		Logigator ist eine von mir entwickelte offene Plattform zum Entwerfen und Simulieren digitaler
		Logikschaltungen direkt im Browser. Sie verbindet einen intuitiven Editor mit einer schnellen
		Echtzeitsimulation und eignet sich sowohl für erste Lernschritte als auch für anspruchsvollere
		Experimente mit komplexeren, hierarchischen Schaltungen.
	</P>

	<!-- Highlights & Technologies Grid -->
	<div class="grid gap-8 md:grid-cols-2">
		<div>
			<Heading tag="h4" class="text-base mb-3">Highlights</Heading>
			<div class="flex flex-wrap gap-2">
				{#each features as t (t.label)}<Badge color={t.color}>{t.label}</Badge>{/each}
			</div>
		</div>
		<div>
			<Heading tag="h4" class="text-base mb-3">Technologien</Heading>
			<div class="flex flex-wrap gap-2">
				<TechTag tech="devops"></TechTag>
				<TechTag tech="docker"></TechTag>
			</div>
		</div>
	</div>

	<!-- Education & Recognition -->
	<div class="space-y-4">
		<Heading tag="h3">Bildung & Aufmerksamkeit</Heading>
		<P>
			Das Projekt wurde in der Fachpresse vorgestellt – u. a. im IT‑Magazin <span
				class="font-semibold">c't</span
			> (Ausgabe 15/2024). Darüber hinaus hat Logigator seinen Weg in Unterrichtsmaterialien und Schulbücher
			gefunden und unterstützt Lehrkräfte beim praxisnahen Vermitteln digitaler Logik. Die Kombination
			aus unmittelbarem Feedback und niedriger Einstiegshürde macht es ideal für Lernumgebungen und selbstgesteuertes
			Experimentieren.
		</P>
		<P>
			Ich betreue die Plattform aktiv: Regelmäßige Wartung, Security‑Updates, gezielte
			Fehlerbehebungen und qualitative Verbesserungen sorgen für ein verlässlich stabiles Fundament.
			Nutzer profitieren von einem konsistenten Erlebnis und einer robusten Codebasis, auf deren
			Grundlage ich bedarfsorientiert neue Optimierungen und sinnvolle Erweiterungen einbringe.
		</P>
		<div class="flex flex-wrap gap-4 pt-2">
			<A
				href="https://www.heise.de/select/ct/2024/15/2330613124168593542"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="c't Artikel Ausgabe 15/2024 öffnen">c't Artikel (15/2024)</A
			>
			<A
				href="https://www.ccbuchner.de/produkt/informatik-nordrhein-westfalen-9-10-8592"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Schulbuch Informatik NRW 9/10 öffnen">Schulbuch: Informatik NRW 9/10</A
			>
		</div>
	</div>

	<!-- Actions -->
	<div class="mt-2 flex flex-wrap gap-4">
		<Button
			tag="a"
			href="https://logigator.com"
			rel="noopener noreferrer"
			target="_blank"
			color="primary">Website</Button
		>
		<Button
			tag="a"
			href="https://github.com/logigator/logigator"
			rel="noopener noreferrer"
			target="_blank"
			color="light">GitHub</Button
		>
	</div>
</Card>
