<script lang="ts">
    import { page } from "$app/stores";
    import type { PageData } from "./$types";
    import AssignmentCard from "./assignment-card.svelte";

    interface Props {
        data: PageData;
    }

    let { data }: Props = $props();
    const { assignments } = data;
    const classId = $page.params.id;
</script>

<main
    class="p-6 grid md:grid-cols-2 xl:grid-cols-3 max-w-screen-2xl xl:mx-auto gap-6"
>

{#each assignments as assignment}
    <AssignmentCard {classId} {assignment}/>
    <!-- {assignment} -->
{/each}
</main>
