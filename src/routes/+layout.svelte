<script lang="ts">
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import { page } from '$app/state';
	import {
		DarkMode,
		Footer,
		FooterCopyright,
		FooterLinkGroup,
		FooterLink,
		Navbar,
		NavBrand
	} from 'flowbite-svelte';
	import LanguageSelector from '$lib/components/language-selector.svelte';
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
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
		<LanguageSelector></LanguageSelector>
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
