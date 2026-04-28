<script lang="ts">
	import type { Snippet } from 'svelte';

	const {
		class: className,
		variant,
		children,
		...otherProps
	}: { class?: string; variant?: 'dark'; children: Snippet } & {
		[key: string]: unknown;
	} = $props();

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
