<script lang="ts">
	import { Heading } from 'flowbite-svelte';
	import Container from '$lib/components/container.svelte';
	import Section from '$lib/components/section.svelte';
	import HeroContent from '$lib/components/sections/hero-content.svelte';
	import AboutContent from '$lib/components/sections/about-content.svelte';
	import ServicesContent from '$lib/components/sections/services-content.svelte';
	import TechnologiesContent from '$lib/components/sections/technologies-content.svelte';
	import CallToActionContent from '$lib/components/sections/call-to-action-content.svelte';
	import ExperiencesContent from '$lib/components/sections/experiences-content.svelte';
	import EducationContent from '$lib/components/sections/education-content.svelte';
	import LogigatorContent from '$lib/components/sections/logigator-content.svelte';
	import ProxmoxClusterContent from '$lib/components/sections/proxmox-cluster-content.svelte';
	import { m } from '$lib/paraglide/messages.js';
</script>

<!-- Hero -->
<Section variant="dark">
	<Container>
		<HeroContent />
	</Container>
</Section>

<!-- About Me -->
<Section>
	<Container>
		<AboutContent />
	</Container>
</Section>

<!-- Leistungen -->
<Section>
	<Container>
		<ServicesContent />
	</Container>
</Section>

<!-- Technologien & Tools -->
<Section>
	<Container>
		<TechnologiesContent />
	</Container>
</Section>

<!-- Timeline -->
<Section id="cv">
	<Container class="grid gap-8 lg:grid-cols-2">
		<div>
			<ExperiencesContent />
		</div>
		<div>
			<EducationContent />
		</div>
	</Container>
</Section>

<!-- Projects -->
<Section>
	<Container class="flex flex-col gap-8">
		<Heading tag="h2">{m['projects.headline']()}</Heading>
		<LogigatorContent />
		<ProxmoxClusterContent />
	</Container>
</Section>

<!-- Call to action -->
<Section variant="dark" id="contact">
	<Container class="text-center">
		<CallToActionContent />
	</Container>
</Section>
