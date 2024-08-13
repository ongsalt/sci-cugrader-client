<script lang="ts">
    import type { PageData } from "./$types";

    export let data: PageData
</script>

<main class="p-6">
    <h1>Welcome to SvelteKit</h1>
    <p>Please login (chula email only)</p>

    <div>
        <a class="text-primary underline-offset-2 underline" href="/home"
            >Home</a
        >
        <a class="text-primary underline-offset-2 underline" href="/signin"
            >Sign In</a
        >
    </div>

    <div class="mt-8">
        {JSON.stringify(data)}
    </div>
</main>
