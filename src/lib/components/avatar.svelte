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
		xs: 'w-6 h-6 text-xs',
		sm: 'w-8 h-8 text-xs',
		md: 'w-10 h-10 text-sm',
		lg: 'w-12 h-12 text-lg',
		xl: 'w-16 h-16 text-2xl',
		'2xl': 'w-20 h-20 text-3xl',
		'3xl': 'w-24 h-24 text-4xl',
		'4xl': 'w-32 h-32 text-5xl',
		'5xl': 'w-40 h-40 text-5xl',
		'6xl': 'w-48 h-48 text-5xl'
	};

	const colorMap = [
		'bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-gray-300',
		'bg-red-200 dark:bg-red-900 text-red-900 dark:text-red-300',
		'bg-orange-200 dark:bg-orange-900 text-orange-900 dark:text-orange-300',
		'bg-amber-200 dark:bg-amber-900 text-amber-900 dark:text-amber-300',
		'bg-yellow-200 dark:bg-yellow-900 text-yellow-900 dark:text-yellow-300',
		'bg-lime-200 dark:bg-lime-900 text-lime-900 dark:text-lime-300',
		'bg-green-200 dark:bg-green-900 text-green-900 dark:text-green-300',
		'bg-emerald-200 dark:bg-emerald-900 text-emerald-900 dark:text-emerald-300',
		'bg-teal-200 dark:bg-teal-900 text-teal-900 dark:text-teal-300',
		'bg-cyan-200 dark:bg-cyan-900 text-cyan-900 dark:text-cyan-300',
		'bg-sky-200 dark:bg-sky-900 text-sky-900 dark:text-sky-300',
		'bg-blue-200 dark:bg-blue-900 text-blue-900 dark:text-blue-300',
		'bg-indigo-200 dark:bg-indigo-900 text-indigo-900 dark:text-indigo-300',
		'bg-violet-200 dark:bg-violet-900 text-violet-900 dark:text-violet-300',
		'bg-fuchsia-200 dark:bg-fuchsia-900 text-fuchsia-900 dark:text-fuchsia-300',
		'bg-purple-200 dark:bg-purple-900 text-purple-900 dark:text-purple-300',
		'bg-pink-200 dark:bg-pink-900 text-pink-900 dark:text-pink-300',
		'bg-rose-200 dark:bg-rose-900 text-rose-900 dark:text-rose-300'
	];

	const color = $derived.by(() => {
		const hash = Array.from(initials).reduce((acc, char) => acc + char.charCodeAt(0), 0);
		return colorMap[hash % colorMap.length];
	});

	const classes = $derived.by(() => {
		let result = [
			'relative',
			'inline-flex',
			'items-center',
			'justify-center',
			'overflow-hidden',
			'rounded-full',
			'shrink-0',
			sizeClassMap[size] ?? sizeClassMap.md,
			color
		];

		if (className) {
			result.push(...className.split(' '));
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
			loading="lazy"
			onerror={handleError}
		/>
	{/if}
</div>
