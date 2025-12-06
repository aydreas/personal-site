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
	import portrait from '$lib/assets/images/portrait_512.webp';

	let { children } = $props();

	// Basic SEO constants
	const SITE_NAME = 'Andreas Schlößl';
	const TITLE = 'Andreas Schlößl - Software Engineer';
	const DESCRIPTION =
		'Software engineer specializing in TypeScript, Svelte, and building reliable, accessible web apps. Explore projects, experience, and services.';
	const THEME_COLOR = '#314158'; // Tailwind slate-700
</script>

<svelte:head>
	<title>{TITLE}</title>
	<link rel="icon" href={favicon} />

	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap"
		rel="stylesheet"
	/>

	<!-- Basic meta -->
	<meta name="description" content={DESCRIPTION} />
	<meta name="author" content={SITE_NAME} />
	<meta name="theme-color" content={THEME_COLOR} />
	<meta
		name="keywords"
		content="Software Engineer, IT Infrastructure, Automation, Webdev, Consulting"
	/>

	<!-- Canonical URL -->
	<link rel="canonical" href={`${page.url.origin}${page.url.pathname}`} />

	<!-- hreflang alternates for i18n -->
	{#each locales as locale (locale)}
		<link
			rel="alternate"
			hreflang={locale}
			href={`${page.url.origin}${localizeHref(page.url.pathname, { locale })}`}
		/>
	{/each}
	<!-- x-default fallback -->
	<link rel="alternate" hreflang="x-default" href={`${page.url.origin}${page.url.pathname}`} />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={SITE_NAME} />
	<meta property="og:title" content={TITLE} />
	<meta property="og:description" content={DESCRIPTION} />
	<meta property="og:url" content={`${page.url.origin}${page.url.pathname}`} />
	<!-- If you have a social share image, set it here; uses portrait as a fallback -->
	<meta property="og:image" content={portrait} />
	<meta property="og:image:alt" content="Portrait of Andreas Schlößl" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={TITLE} />
	<meta name="twitter:description" content={DESCRIPTION} />
	<meta name="twitter:image" content={portrait} />

	<!-- Robots -->
	<meta name="robots" content="index,follow" />
</svelte:head>

<div style="display:none">
	{#each locales as locale (locale)}
		<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
		<a href={localizeHref(page.url.pathname, { locale })}>{locale}</a>
	{/each}
</div>

<Navbar class="px-0 sm:px-0" navContainerClass="px-4 md:px-8">
	<NavBrand href="/">Andreas Schlößl</NavBrand>
	<div class="flex gap-4">
		<LanguageSelector></LanguageSelector>
		<DarkMode></DarkMode>
	</div>
</Navbar>
<main>{@render children()}</main>
<Footer>
	<FooterCopyright></FooterCopyright>
	<FooterLinkGroup>
		<FooterLink href="/impressum">Impressum</FooterLink>
	</FooterLinkGroup>
</Footer>
