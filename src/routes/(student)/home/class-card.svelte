<script lang="ts">
    import type { Class } from "$lib/api/types";

    export let classInfo: Class
</script>

<a
    href="/class/{classInfo.code}"
    class="border rounded-md bg-background shadow-sm transition hover:shadow"
>
    <div class="p-4 flex gap-4 items-stretch">
        <img src="" alt="" class="h-12 w-12" />
        <div>
            <h2 class="font-medium">{classInfo.name}</h2>
            <h3 class="text-muted-foreground">{classInfo.code}</h3>
        </div>
    </div>
    <div class="p-4 py-3 border-t">
        <p>1 Assignment</p>
    </div>
</a>
