<script lang="ts">
	import { Heading, P } from 'flowbite-svelte';
	import { m } from '$lib/paraglide/messages';
	import Avatar from '$lib/components/avatar.svelte';
	import portrait from '$lib/assets/images/portrait_512.webp';
</script>

<Heading tag="h2" class="mb-8">{m['aboutContent.headline']()}</Heading>
<div class="flex flex-col items-center gap-8 lg:flex-row lg:items-start">
	<Avatar initials="AS" src={portrait} size="6xl"></Avatar>
	<div class="space-y-4">
		<P>{m['aboutContent.paragraph1']()}</P>
		<P>{m['aboutContent.paragraph2']()}</P>
		<P>{m['aboutContent.paragraph3']()}</P>
	</div>
</div>
