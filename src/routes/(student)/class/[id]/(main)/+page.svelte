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
    class="p-6 flex flex-col gap-6"
>

{#each assignments as assignment}
    <AssignmentCard {classId} {assignment}/>
    <!-- {assignment} -->
{/each}
</main>
