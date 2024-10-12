<script lang="ts">
    import type { PageData } from "./$types";
    
    export let data: PageData
</script>

<main class="p-6">
    <h1>The design is totally not inspired by a certain triangle company</h1>
    <p>Please login by copying the cookie from sci.cugrader.com</p>

    <div>
        <a class="text-primary underline-offset-2 underline" href="/home"
            >Home</a
        >
        <a class="text-primary underline-offset-2 underline" href="/login"
            >Log In</a
        >
    </div>

    <div class="mt-8">
        <p class="text-destructive">
            This is unfinished you can't download or submit a file here.
        </p>
    </div>
</main>
