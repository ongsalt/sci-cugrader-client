<script>
    import ScoreBadge from "$lib/components/score-badge.svelte";
    import Subheader from "$lib/components/sub-header.svelte";
    import FileBadge from "$lib/components/file-badge.svelte";
    import QuestionCard from "$lib/components/question-card.svelte";
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
