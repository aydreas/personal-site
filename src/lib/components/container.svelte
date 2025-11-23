<script lang="ts">
	const {
		class: className,
		children,
		...otherProps
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	}: { class?: string; children: any } & { [key: string]: any } = $props();

	const classes = $derived.by(() => {
		let result = 'container mx-auto md:px-8 px-4';

		if (className) {
			result += ` ${className}`;
		}

		return result;
	});
</script>

<div class={classes} {...otherProps}>
	{@render children?.()}
</div>
