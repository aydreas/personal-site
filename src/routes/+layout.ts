import { browser } from '$app/environment';
import { shouldRedirect } from '$lib/paraglide/runtime';
import { redirect } from '@sveltejs/kit';
import { removeTrailingSlash } from '$lib/url';

export const prerender = true;

export const load = async ({ url }) => {
	if (!browser) return;

	const decision = await shouldRedirect({ url });

	if (decision.shouldRedirect && decision.redirectUrl) {
		redirect(302, removeTrailingSlash(decision.redirectUrl.href));
	}
};
