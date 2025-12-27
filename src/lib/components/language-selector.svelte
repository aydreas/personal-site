<script lang="ts">
	import { getLocale, setLocale } from '$lib/paraglide/runtime';
	import { Select, Label } from 'flowbite-svelte';
	import { m } from '$lib/paraglide/messages';

	const languages = [
		{ value: 'en', name: 'English' },
		{ value: 'de', name: 'Deutsch' }
	];

	let selectedLanguage = $state(getLocale());
</script>

<Label>
	<span class="sr-only">{m['languageSelector.label']()}</span>
	<Select
		selectClass="w-42 cursor-pointer"
		placeholder={m['languageSelector.placeholder']()}
		items={languages}
		bind:value={selectedLanguage}
		onchange={() => setLocale(selectedLanguage)}
	></Select>
</Label>
