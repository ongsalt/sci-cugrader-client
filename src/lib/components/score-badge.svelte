<script lang="ts">
    import type { Snippet } from "svelte";

    interface Props {
        children: Snippet;
    }
    let { children }: Props = $props();
</script>

<div class="rounded-full py-1 px-2 h-fit bg-primary-500/5 text-primary">
    {#if children}
        {@render children()}
    {:else}
        6.67/10
    {/if}
</div>
