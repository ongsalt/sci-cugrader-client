<script lang="ts">
    import type { PageData } from "./$types";
    import YearSection from "./year-section.svelte";
    export let data: PageData;

    const { classes } = data;
</script>

<main class="p-6">
    <div class="space-y-4">
        {#each Object.entries(classes) as [semaster, classesInSemaster]}
            <YearSection {semaster} classes={classesInSemaster} />
        {/each}
    </div>
</main>
