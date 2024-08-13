<script lang="ts">
    import ScoreBadge from "$lib/components/score-badge.svelte";
    import type { Assignment } from "$lib/api/types";

    export let classId: string;
    export let assignment: Assignment;
</script>

<a
    href="/class/{classId}/assignment/{assignment.id}"
    class="block bg-background border rounded-md p-4 shadow-sm transition hover:shadow"
>
    <div class="flex justify-between">
        <div>
            <h2 class="text-lg">{assignment.name}</h2>
            <h3 class="text-sm">{assignment.id}</h3>
        </div>
        <!-- ignore hideScore lmao  -->
        <ScoreBadge>{assignment.score}/{assignment.maxScore}</ScoreBadge>
    </div>
    <div class="mt-2 flex flex-wrap justify-between gap-x-3 gap-y-0">
        <!-- TODO: format date -->
        <p>[publish] {assignment.publish}</p>
        <p>[due] {assignment.due}</p>
    </div>
</a>
