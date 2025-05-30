<script lang="ts">
    import * as Collapsible from "$lib/components/ui/collapsible";
    import { ChevronDown, ChevronRight } from "svelte-radix";
    import ClassCard from "./class-card.svelte";
    import type { Class } from "$lib/api/types";

    interface Props {
        semaster?: string;
        classes?: Class[];
    }

    let { semaster = "2024/1", classes = [] }: Props = $props();
    let open = $state(true);
</script>

<Collapsible.Root {open} onOpenChange={it => (open = it)}>
    <Collapsible.Trigger class="flex gap-2 items-center">
        {#if open}
            <ChevronDown />
        {:else}
            <ChevronRight />
        {/if}
        <h2 class="font-medium text-lg">{semaster}</h2>
    </Collapsible.Trigger>
    <Collapsible.Content>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {#each classes as classInfo}
            <ClassCard {classInfo} />
            {/each}
        </div>
    </Collapsible.Content>
</Collapsible.Root>
