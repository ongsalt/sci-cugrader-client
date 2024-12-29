<script lang="ts">
    import FileBadge from "$lib/components/file-badge.svelte";
    import QuestionCard from "$lib/components/question-card.svelte";
    import type { PageData } from "./$types";

    interface Props {
        data: PageData;
    }

    let { data }: Props = $props();
    const { questions, info } = data.meta.assignment;
</script>

<main
    class="p-6 grid lg:grid-cols-2 2xl:grid-cols-3 gap-6"
>
    <div class="border rounded p-4 bg-muted space-y-2">
        <h2 class="text-lg"> Attachments </h2>
        {#each info.attachments as { name, id }}
            <FileBadge {name} description=""  />
        {/each}
    </div>
    {#each questions as question, index}
        <QuestionCard {question} index={index + 1}/>
    {/each}
</main>
