<script lang="ts">
	import { page } from '$app/state';
	import Container from '../lib/components/container.svelte';
	import Section from '../lib/components/section.svelte';
	import { Button, Heading } from 'flowbite-svelte';
</script>

<!-- Use the Container and Section components for consistent layout -->
<Container>
	<Section class="text-center">
		<span class="block text-7xl mb-4" aria-label="Error">😕</span>
		<Heading tag="h1" class="mb-12">
			{page.status}: {page.error?.message ?? 'An unexpected error occurred.'}
		</Heading>
		<Button href="/">Go to Homepage</Button>
	</Section>
</Container>
