<script lang="ts">
    import { defineRoute } from "$lib/navigation";
    import { page } from "$app/stores";
    import type { LayoutData } from "./$types";

    export let data: LayoutData;
    defineRoute(data.classMeta.name, `/class/${$page.params.id}`);
</script>

<slot />
