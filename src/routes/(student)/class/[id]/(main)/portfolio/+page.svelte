<script lang="ts">
    import type { PageData } from "./$types";

    interface Props {
        data: PageData;
    }

    let { data }: Props = $props();
    const { ranking } = data;
</script>

<main class="p-6 grid grid-rows-[auto_auto] gap-6">
    <div class="grid grid-cols-2 gap-6">
        <div class="border rounded-md bg-background p-4">
            <h1 class="font-medium">Score</h1>
            <h2 class="text-4xl mt-2 text-primary">
                {ranking.score}
                <span class="text-xl text-muted-foreground"
                    >of {ranking.maxScore}</span
                >
            </h2>
        </div>
        <div
            class="border border-primary rounded-md bg-gradient-to-br from-primary-400 to-primary p-4 text-white"
        >
            <h1 class="font-medium">Rank</h1>
            <h2 class="text-4xl mt-2">
                {ranking.rank}
                <span class="text-xl text-white/50"
                    >of {ranking.studentCount}</span
                >
            </h2>
        </div>
    </div>
    <div class="border rounded-md bg-background p-4">
        <h1 class="font-medium">Statistics</h1>
        <p>some graph here</p>
        <p>{JSON.stringify(ranking)}</p>
    </div>
</main>
