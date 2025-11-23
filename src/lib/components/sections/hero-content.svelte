<script lang="ts">
	import { Button, Heading, P } from 'flowbite-svelte';
	import Socials from '$lib/components/sections/socials.svelte';
</script>

<Heading tag="h1" class="mb-6 tracking-tight text-white">
	Flexibler IT-Dienstleister für Entwicklung & Infrastruktur
</Heading>
<P class="text-white">
	Ich unterstütze Unternehmen als flexibler IT-Dienstleister mit Fokus auf Softwareentwicklung,
	Systemadministration und technischer Beratung. Ob Entwicklung von Anwendungen, Aufbau moderner
	Cloud-Infrastrukturen oder zuverlässiger IT-Support – ich liefere pragmatische, skalierbare
	Lösungen, die direkt im Tagesgeschäft spürbar helfen. Ich arbeite auf Stunden- oder Projektbasis,
	ermögliche schnelle Reaktionszeiten und passe mich exakt den Anforderungen deines Unternehmens an.
	Für Startups, KMU und bestehende IT-Teams bin ich ein zuverlässiger Partner, der sowohl
	kurzfristige Engpässe überbrückt als auch langfristige technische Weiterentwicklung unterstützt.
</P>
<div class="mt-8 flex gap-4 justify-between flex-col sm:flex-row">
	<div class="flex flex-wrap gap-4 flex-col sm:flex-row">
		<Button href="#contact" color="primary">Kontakt aufnehmen</Button>
		<Button href="#cv" color="light">Lebenslauf</Button>
	</div>
	<div class="flex flex-wrap gap-4 flex-col sm:flex-row">
		<Socials />
	</div>
</div>
