<script lang="ts">
    import { defineRoute } from "$lib/navigation";
    import { page } from "$app/stores";
    import type { LayoutData } from "./$types";

    interface Props {
        data: LayoutData;
        children?: import('svelte').Snippet;
    }

    let { data, children }: Props = $props();
    defineRoute(data.classMeta.name, `/class/${$page.params.id}`);
</script>

{@render children?.()}
