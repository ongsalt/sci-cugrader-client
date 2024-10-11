<script lang="ts">
    import Subheader from "$lib/components/sub-header.svelte";
    import { defineRoute } from "$lib/navigation";
    import { formatDate } from "$lib/utils/date";
    import type { LayoutData } from "./$types";

    export let data: LayoutData
    
    const { name, lab, due, publish, id } = data.assignment
    defineRoute(name);
</script>

<Subheader title={name} subTitle="ID {id} • Lab {lab}">
    <div class="mt-2" slot="description">
        <p><span class="text-muted-foreground">Publish</span> {formatDate(publish)}</p>
        <p><span class="text-muted-foreground">Due</span> {formatDate(due)}</p>
    </div>
</Subheader>
<slot />