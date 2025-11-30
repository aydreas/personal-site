<script lang="ts">
	import { Heading, P } from 'flowbite-svelte';
	import Avatar from '$lib/components/avatar.svelte';

	import portrait from '$lib/assets/images/portrait_512.webp';
</script>

<Heading tag="h2" class="mb-8">Über mich</Heading>
<div class="flex flex-col items-center gap-8 lg:flex-row lg:items-start">
	<Avatar class="w-48 h-48 text-4xl bg-gray-300" src="{portrait}">AS</Avatar>
	<div class="space-y-4">
		<P>
			Ich bin leidenschaftlicher Softwareentwickler und IT-Spezialist mit Fokus auf robuste Webanwendungen,
			Cloud-Infrastruktur und Automatisierung. In meiner täglichen Arbeit verbinde ich Entwicklung und
			Betrieb, um skalierbare Systeme mit klarer Architektur und effizienter Delivery zu schaffen.
		</P>
		<P>
			Besonders wichtig sind mir pragmatische Lösungen, saubere Codebasis und nachvollziehbare Prozesse.
			Ich arbeite gerne eng mit Teams zusammen, identifiziere Engpässe und setze Verbesserungen um, die
			langfristig Wartbarkeit und Geschwindigkeit erhöhen.
		</P>
		<P>
			Außerhalb von Kundenprojekten experimentiere ich mit neuen Technologien, optimiere DevOps-Workflows
			und erweitere mein Wissen in Sicherheits- und Performancefragen.
		</P>
	</div>
</div>

