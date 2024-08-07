<script>

    import ScoreBadge from "$lib/components/score-badge.svelte";

</script>
<main class="p-6 grid md:grid-cols-2 xl:grid-cols-3 max-w-screen-2xl xl:mx-auto gap-6">
    <a
        href="/class/1/assignment/1"
        class="block bg-background border rounded-md p-4 shadow-sm transition hover:shadow"
    >
        <div class="flex justify-between">
            <div>
                <h2 class="text-lg">Lab 1</h2>
                <h3 class="text-sm">Lab 1</h3>
            </div>
            <ScoreBadge>56/80</ScoreBadge>
        </div>
        <div class="mt-2 flex flex-wrap justify-between gap-x-3 gap-y-0">
            <p>[icon] 05/08/2024 11:00</p>
            <p>[icon] 19/08/2024 11:00</p>
        </div>
    </a>
</main>
