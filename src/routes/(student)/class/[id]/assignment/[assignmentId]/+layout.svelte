<script lang="ts">
    import Subheader from "$lib/components/sub-header.svelte";
    import { defineRoute } from "$lib/navigation";
    import { formatDate } from "$lib/utils/date";
    import type { LayoutData } from "./$types";

    export let data: LayoutData
    
    const { name, lab, due, publish } = data.assignment
    defineRoute(name);
</script>

<Subheader title={name} subTitle="{lab}">
    <div class="mt-2" slot="description">
        <p>[publish] {formatDate(publish)}</p>
        <p>[due] {formatDate(due)}</p>
    </div>
</Subheader>
<slot />