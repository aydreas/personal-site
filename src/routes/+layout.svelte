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
		NavBrand,
        NavHamburger,
        NavUl,
        NavLi
	} from 'flowbite-svelte';
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
	export const prerender = true;
</script>

<svelte:head>
	<div style="display:none">
		{#each locales as locale}
			<a href={localizeHref(page.url.pathname, { locale })}>{locale}</a>
		{/each}
	</div>
	<link rel="icon" href={favicon} />
</svelte:head>

<Navbar>
	<NavBrand href="/">
        Andreas Schlößl
    </NavBrand>
    <DarkMode></DarkMode>
    <NavHamburger></NavHamburger>
    <NavUl>
        <NavLi>About</NavLi>
    </NavUl>
</Navbar>
{@render children()}
<Footer>
	<FooterCopyright></FooterCopyright>
	<FooterLinkGroup>
		<FooterLink href="/">Impressum</FooterLink>
	</FooterLinkGroup>
</Footer>
