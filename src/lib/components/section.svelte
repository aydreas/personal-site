<script lang="ts">
	const {
		class: className,
		variant,
		children,
		...otherProps
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	}: { class?: string; variant?: 'dark'; children: any } & { [key: string]: any } = $props();

	const classes = $derived.by(() => {
		let result = 'py-16';

		if (className) {
			result += ` ${className}`;
		}

		if (variant === 'dark') {
			result += ' bg-dark-gradient';
		}

		return result;
	});
</script>

<section class={classes} {...otherProps}>
	{@render children?.()}
</section>
