<script lang="ts">
    import * as Collapsible from "$lib/components/ui/collapsible";
    import { ChevronDown, ChevronRight } from "svelte-radix";
    import ClassCard from "./class-card.svelte";
    import type { Class } from "$lib/api/types";

    export let year = "2024/1";
    export let classes: Class[] = [];
    let open = true;
</script>

<Collapsible.Root bind:open>
    <Collapsible.Trigger class="flex gap-2 items-center">
        {#if open}
            <ChevronDown />
        {:else}
            <ChevronRight />
        {/if}
        <h2 class="font-medium text-lg">{year}</h2>
    </Collapsible.Trigger>
    <Collapsible.Content class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {#each classes as classInfo}
            <ClassCard {classInfo} />
        {/each}
    </Collapsible.Content>
</Collapsible.Root>
