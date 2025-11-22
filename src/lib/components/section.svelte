<script lang="ts">
    const { class: className, variant, children }: { class?: string; variant?: 'dark'; children: any } = $props();

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

<div class={classes}>
    {@render children?.()}
</div>
