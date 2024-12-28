<script lang="ts">
    import ScoreBadge from "$lib/components/score-badge.svelte";
    import type { Assignment } from "$lib/api/types";
    import { formatDate } from "$lib/utils/date";

    interface Props {
        classId: string;
        assignment: Assignment;
    }

    let { classId, assignment }: Props = $props();
</script>

<a
    href="/class/{classId}/assignment/{assignment.id}"
    class="block bg-background border rounded-md p-4 shadow-sm transition hover:shadow-md"
>
    <div class="flex justify-between">
        <div>
            <h2 class="text-lg">{assignment.name}</h2>
            <h3 class="text-sm text-muted-foreground">ID {assignment.id} • Lab {assignment.lab}</h3>
        </div>
        <!-- ignore hideScore lmao  -->
        <ScoreBadge>{assignment.score}/{assignment.maxScore}</ScoreBadge>
    </div>
    <div class="mt-2 flex flex-wrap justify-between gap-x-3 gap-y-0">
        <p><span class="text-muted-foreground">Publish</span> {formatDate(assignment.publish)}</p>
        <p><span class="text-muted-foreground">Due</span> {formatDate(assignment.due)}</p>
    </div>
</a>
