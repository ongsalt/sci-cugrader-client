<script lang="ts">
    import { defineRoute } from "$lib/navigation";
    import type { LayoutData } from "./$types";

    export let data: LayoutData
    
    defineRoute(data.classMeta.name);
</script>

<slot />