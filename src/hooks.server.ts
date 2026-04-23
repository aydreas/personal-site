import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { paraglideMiddleware } from '$lib/paraglide/server';
import { removeTrailingSlash } from '$lib/url';

const handleParaglide: Handle = ({ event, resolve }) =>
	paraglideMiddleware(event.request, ({ request, locale }) => {
		event.request = request;

		return resolve(event, {
			transformPageChunk: ({ html }) => html.replace('%paraglide.lang%', locale)
		});
	});

const handleRedirectTrailingSlash: Handle = async ({ event, resolve }) => {
	const response = await resolve(event);
	if (response.status >= 300 && response.status < 400) {
		const location = response.headers.get('location');
		if (location && location.length > 1) {
			const headers = new Headers(response.headers);
			headers.set('location', removeTrailingSlash(location));
			return new Response(null, { status: response.status, headers });
		}
	}
	return response;
};

export const handle: Handle = sequence(handleRedirectTrailingSlash, handleParaglide);
