<script lang="ts">
  type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

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
    xl: 'w-16 h-16 text-2xl'
  };

	const classes = $derived.by(() => {
		let result = `inline-flex items-center justify-center overflow-hidden rounded-full ${sizeClassMap[size] ?? sizeClassMap.md} bg-gray-200 text-gray-900 shrink-0`;

		if (className) {
			result += ` ${className}`;
		}

		return result;
	});

	function handleError() {
		showFallback = true;
	}
</script>

<div
  class={classes}
  aria-label={alt || 'Avatar'}
>
  {#if !!src && !showFallback}
    <img
      src={src}
      alt={alt || 'Avatar'}
      class="block w-full h-full object-cover"
      onerror={handleError}
    />
  {:else}
    <span class="font-semibold leading-none select-none">{initials}</span>
  {/if}
</div>
