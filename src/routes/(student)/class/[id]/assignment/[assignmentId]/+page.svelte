<script lang="ts">
    import QuestionCard from "$lib/components/question-card.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;
    const { questions } = data.assignmentMeta;
</script>

<main
    class="p-6 grid md:grid-cols-2 2xl:grid-cols-3 gap-6"
>
    {#each questions as question, index}
        <QuestionCard {question} index={index + 1}/>
    {/each}
</main>
