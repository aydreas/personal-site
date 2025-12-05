import { shouldRedirect } from '$lib/paraglide/runtime';
import { redirect } from '@sveltejs/kit';

export const prerender = true;

export const load = async ({ url }) => {
	const decision = await shouldRedirect({ url });

	if (decision.shouldRedirect && decision.redirectUrl) {
		redirect(302, decision.redirectUrl.href);
	}
};
