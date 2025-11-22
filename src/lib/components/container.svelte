<script lang="ts">
	const { class: className, children }: { class?: string; children: any } = $props();

	const classes = $derived.by(() => {
		let result = 'container mx-auto';

		if (className) {
			result += ` ${className}`;
		}

		return result;
	});
</script>

<div class={classes}>
	{@render children?.()}
</div>
