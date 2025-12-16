<script lang="ts">
	import { Button, Heading, P } from 'flowbite-svelte';
	import { m } from '$lib/paraglide/messages';
	import SocialsContent from '$lib/components/sections/socials-content.svelte';
</script>

<Heading tag="h1" class="mb-6 tracking-tight text-white">{m['heroContent.headline']()}</Heading>
<P class="text-white">{m['heroContent.paragraph']()}</P>
<div class="mt-8 flex gap-4 justify-between flex-col sm:flex-row">
	<div class="flex flex-wrap gap-4 flex-col sm:flex-row">
		<Button href="#contact" color="primary">{m['heroContent.button_contact']()}</Button>
		<Button href="#cv" color="light">{m['heroContent.button_cv']()}</Button>
	</div>
	<div class="flex flex-wrap gap-4 flex-col sm:flex-row">
		<SocialsContent />
	</div>
</div>
