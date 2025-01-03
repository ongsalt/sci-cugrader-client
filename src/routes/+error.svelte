<script>
    import { page } from "$app/state";
    import { errorMessages } from "$lib/api/error";
    import Button from "$lib/components/ui/button/button.svelte";
    import { ArrowLeft } from "lucide-svelte";
</script>

<main class="relative p-4 flex items-center justify-center flex-1">
    <div class="text-center flex flex-col items-center">
        <img src="/ame.gif" alt="ame spinning" />
        <h1 class="text-foreground/60 mt-6">Error</h1>
        <p class="text-6xl mt-2">{page.status}</p>
        {#if page.error}
            <p class="mt-1">{errorMessages[page.error.kind].title}</p>
            <p class="mt-3">{errorMessages[page.error.kind].description}</p>
        {:else if page.status === 404}
            <p class="mt-1">Page not found</p>
            <p>
                Go back to <a
                    href="/"
                    class="mt-3 text-primary-600 hover:underline underline-offset-2"
                    >landing</a
                >
            </p>
        {/if}
        <div class="h-12"></div>
    </div>

    <a href="/" class="absolute top-4 left-4 flex items-center gap-3 group">
        <div
            class="rounded-full overflow-clip w-9 h-9 bg-muted-foreground/10 flex items-center justify-center group-hover:bg-muted-foreground/15 transition"
        >
            <ArrowLeft class="w-5" />
        </div>
        Back to home
    </a>
</main>
