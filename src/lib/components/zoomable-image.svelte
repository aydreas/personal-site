<script lang="ts">
	import mediumZoom, { type Zoom } from 'medium-zoom';
	import type { HTMLImgAttributes } from 'svelte/elements';

	type ZoomableImageProps = HTMLImgAttributes & { 'data-zoom-src'?: string };

	const props: ZoomableImageProps = $props();

	let zoom: Zoom | null = null;

	function getZoom() {
		if (zoom === null) {
			zoom = mediumZoom({
				background: 'rgba(0, 0, 0, 0.5)',
				margin: 16
			});
		}

		return zoom;
	}

	function attachZoom(image: HTMLImageElement) {
		const zoom = getZoom();
		zoom.attach(image);

		return {
			destroy() {
				zoom.detach();
			}
		};
	}
</script>

<img {...props} use:attachZoom />
