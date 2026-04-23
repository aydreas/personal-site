export function removeTrailingSlash(url: string) {
	if (url.endsWith('/') && url.length > 1) {
		return url.slice(0, -1);
	}
	return url;
}
