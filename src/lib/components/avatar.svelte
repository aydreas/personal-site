<script lang="ts">
	type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';

	const {
		class: className,
		src,
		alt = '',
		initials = '',
		size = 'md'
	}: {
		class?: string;
		src?: string;
		alt?: string;
		initials?: string;
		size?: AvatarSize;
	} = $props();

	let showFallback = $state(false);

	const sizeClassMap: Record<AvatarSize, string> = {
		xs: 'w-6 h-6 text-sm',
		sm: 'w-8 h-8 text-sm',
		md: 'w-10 h-10 text-base',
		lg: 'w-12 h-12 text-lg',
		xl: 'w-16 h-16 text-2xl',
		'2xl': 'w-20 h-20 text-3xl',
		'3xl': 'w-24 h-24 text-4xl',
		'4xl': 'w-32 h-32 text-5xl',
		'5xl': 'w-40 h-40 text-5xl',
		'6xl': 'w-48 h-48 text-5xl'
	};

	const classes = $derived.by(() => {
		let result = `relative inline-flex items-center justify-center overflow-hidden rounded-full ${sizeClassMap[size] ?? sizeClassMap.md} bg-gray-300 text-gray-900 shrink-0`;

		if (className) {
			result += ` ${className}`;
		}

		return result;
	});

	function handleError() {
		showFallback = true;
	}
</script>

<div class={classes} aria-label={alt || 'Avatar'}>
	<span class="absolute font-semibold leading-none select-none" aria-label="Initials"
		>{initials}</span
	>
	{#if !!src && !showFallback}
		<img
			{src}
			alt={alt || 'Avatar'}
			class="absolute block w-full h-full object-cover"
			onerror={handleError}
		/>
	{/if}
</div>
