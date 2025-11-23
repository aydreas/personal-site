<script lang="ts">
	import { Card } from 'flowbite-svelte';

	export let name: string;
	export let description: string;
	export let icon: string | undefined = undefined; // SVG or emoji as string
</script>

<div class="group w-32 h-32 [perspective:600px]">
	<div
		class="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus:[transform:rotateY(180deg)]"
	>
		<Card
			class="absolute p-4 dark:bg-gray-600 text-lg w-full h-full flex flex-col items-center justify-center text-center font-semibold [backface-visibility:hidden]"
		>
			{#if icon}
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				<span class="mb-2 leading-none" aria-hidden="true">{@html icon}</span>
			{/if}
			<span>{name}</span>
		</Card>
		<Card
			class="absolute p-4 dark:bg-gray-600 text-gray-800 dark:text-gray-200 w-full h-full flex flex-col items-center justify-center text-center [backface-visibility:hidden] [transform:rotateY(180deg)]"
		>
			{description}
		</Card>
	</div>
</div>
