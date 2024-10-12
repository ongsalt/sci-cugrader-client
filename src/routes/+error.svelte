<script>
    import { page } from "$app/stores";
</script>

<main class="p-4 flex items-center justify-center flex-1">
    <div class="text-center flex flex-col items-center">
        <img src="/ame.gif" alt="ame spinning" />
        <h1 class="text-foreground/60 mt-6">Error</h1>
        <p class="text-6xl mt-2">{$page.status}</p>
        <p class="mt-1 mb-4">{$page.error?.message}</p>
        {#if $page.status === 401}
            <p>You might want to try to login again</p>
        {:else if $page.status === 404}
            <p>Go back to <a href="/" class="text-primary-600 hover:underline underline-offset-2">landing</a></p>
        {:else}{/if}
        <div class="h-12"></div>
    </div>
</main>
