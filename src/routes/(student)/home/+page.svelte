<script lang="ts">
    import type { PageData } from "./$types";
    import YearSection from "./year-section.svelte";
    interface Props {
        data: PageData;
    }

    let { data }: Props = $props();

    const { classes } = data;
</script>

<main class="p-6">
    <div class="space-y-4">
        {#each Object.entries(classes) as [semaster, classesInSemaster]}
            <YearSection {semaster} classes={classesInSemaster} />
        {:else}
            <h3>
                No class yet... 
            </h3>
            <img src="/ame.gif" alt="ame spinning">
        {/each}
    </div>
</main>
