<script lang="ts">
	import { Card } from 'flowbite-svelte';

	export let name: string;
	export let description: string;
	export let icon: string | undefined = undefined;
</script>

<button
	type="button"
	class="group w-32 h-32 perspective-[600px] focus:outline-none"
	aria-label={`${name} card`}
>
	<div class="flip-inner relative w-full h-full transition-transform duration-500 transform-3d">
		<Card
			class="absolute p-2 dark:bg-gray-600 text-lg w-full h-full flex flex-col items-center justify-center text-center font-semibold backface-hidden"
		>
			{#if icon}
				<i class={['text-4xl', 'mb-2', icon]} aria-hidden="true"></i>
			{/if}
			<span>{name}</span>
		</Card>
		<Card
			class="absolute p-2 dark:bg-gray-600 text-gray-800 dark:text-gray-200 w-full h-full flex flex-col items-center justify-center text-center backface-hidden transform-[rotateY(180deg)] wrap-break-word hyphens-auto text-sm"
		>
			<span class="w-full">{description}</span>
		</Card>
	</div>
</button>

<style>
	button.group:hover .flip-inner,
	button.group:focus-visible .flip-inner {
		transform: rotateY(180deg);
	}
</style>
