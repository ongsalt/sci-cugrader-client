<script lang="ts">
    import type { MenuAction } from "$lib/action";
    import Menu from "$lib/components/menu.svelte"
    import placeholderImage from "$lib/assets/placeholder2.png"

    export let thumbnailSrc: string | null = null  
    export let name: string 
    export let description: string 
    export let actions: MenuAction[] = []

    $: _thumbnailSrc = thumbnailSrc === "" ? null : thumbnailSrc 
</script>

<button class="rounded border flex gap-2 items-center transition" on:click>
    <img
        src={_thumbnailSrc ?? placeholderImage}
        alt="File thumbnail"
        class="ml-1 my-1 w-10 h-10 rounded bg-accent object-cover"
    />
    <div class="pr-3 text-left text-sm">
        <p>{name}</p>
        <p class="text-muted-foreground">{description}</p>
    </div>
    <div class="mr-1">
        <Menu {actions}/>
    </div>
</button>
