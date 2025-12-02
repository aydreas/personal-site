<script lang="ts">
	import { locales, localizeHref, getLocale, setLocale } from '$lib/paraglide/runtime';
	import { page } from '$app/state';
	import {
		DarkMode,
		Footer,
		FooterCopyright,
		FooterLinkGroup,
		FooterLink,
		Navbar,
		NavBrand,
		Select
	} from 'flowbite-svelte';
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();

	const languages = [
		{ value: 'en', name: 'English' },
		{ value: 'de', name: 'Deutsch' }
	];

	let selectedLanguage = $state(getLocale());
</script>

<svelte:head>
	<title>Andreas Schlößl - Software Engineer</title>
</svelte:head>

<div style="display:none">
	{#each locales as locale (locale)}
		<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
		<a href={localizeHref(page.url.pathname, { locale })}>{locale}</a>
	{/each}
</div>
<link rel="icon" href={favicon} />

<Navbar>
	<NavBrand href="/">Andreas Schlößl</NavBrand>
	<div class="flex gap-4">
		<Select
			items={languages}
			bind:value={selectedLanguage}
			onchange={() => setLocale(selectedLanguage)}
		></Select>
		<DarkMode></DarkMode>
	</div>
</Navbar>
{@render children()}
<Footer>
	<FooterCopyright></FooterCopyright>
	<FooterLinkGroup>
		<FooterLink href="/">Impressum</FooterLink>
	</FooterLinkGroup>
</Footer>
