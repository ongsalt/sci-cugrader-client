<script lang="ts">
    import QuestionCard from "$lib/components/question-card.svelte";
    import Subheader from "$lib/components/sub-header.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;
    const { assignments } = data;
</script>

<Subheader title="Lab 1" subTitle="Lab 1">
    <div class="mt-2" slot="description">
        <p>[icon] 05/08/2024 11:00</p>
        <p>[icon] 19/08/2024 11:00</p>
    </div>
</Subheader>

<main
    class="p-6 grid md:grid-cols-2 2xl:grid-cols-3 max-w-screen-2xl xl:mx-auto gap-6"
>
    <QuestionCard />
    <QuestionCard />
    <QuestionCard />
    <QuestionCard />
    <QuestionCard />
</main>
