<script lang="ts">
	import { getLocale, setLocale } from '$lib/paraglide/runtime';
	import { Select } from 'flowbite-svelte';

	const languages = [
		{ value: 'en', name: 'English' },
		{ value: 'de', name: 'Deutsch' }
	];

	let selectedLanguage = $state(getLocale());
</script>

<Select items={languages} bind:value={selectedLanguage} onchange={() => setLocale(selectedLanguage)}
></Select>
