<script lang="ts">
    import { defineRoute } from "$lib/navigation";
    import type { Snippet } from "svelte";
    interface Props {
        children?: Snippet;
    }

    let { children }: Props = $props();

    defineRoute("Home", "/home");
</script>

{@render children?.()}
