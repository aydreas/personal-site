<script lang="ts">
	import { Button, Heading, P } from 'flowbite-svelte';
	import { m } from '$lib/paraglide/messages';
</script>

<Heading tag="h2" class="text-white mb-4">{m['callToAction.headline']()}</Heading>
<P class="text-center text-white mb-8">{m['callToAction.paragraph']()}</P>
<Button
	size="lg"
	href="mailto:schloessl.andreas@gmail.com"
	target="_blank"
	rel="noopener noreferrer external">{m['callToAction.button']()}</Button
>
