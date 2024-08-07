<script lang="ts">
    import type { Class } from "$lib/api/types";
    import YearSection from "./year-section.svelte";
    const classes: Class[] = [
        {
            code: "2301173",
            id: 1,
            instructor: "Naruemon Pratanwanich",
            name: "Programming",
            section: "4",
        },
    ];
</script>

<main class="p-6">
    <div class="space-y-4">
        <YearSection {classes} />
    </div>
</main>
