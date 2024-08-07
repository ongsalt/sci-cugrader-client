<script lang="ts">
    export let thumbnailSrc: string  
    export let name: string 
    export let description: string 
</script>

<button class="rounded border flex gap-2 items-center transition hover:bg-accent" on:click>
    <img
        src={thumbnailSrc}
        alt="File thumbnail"
        class="ml-1 my-1 w-10 h-10 rounded bg-accent"
    />
    <div class="pr-3 text-left">
        <p>{name}</p>
        <p class="text-sm text-muted-foreground">{description}</p>
    </div>
</button>
