<script lang="ts">
    import { createBubbler } from 'svelte/legacy';

    const bubble = createBubbler();
    import type { MenuAction } from "$lib/action";
    import Menu from "$lib/components/menu.svelte"
    import placeholderImage from "$lib/assets/placeholder2.png"

    interface Props {
        thumbnailSrc?: string | null;
        name: string;
        description: string;
        actions?: MenuAction[];
    }

    let {
        thumbnailSrc = null,
        name,
        description,
        actions = []
    }: Props = $props();

    let _thumbnailSrc = $derived(thumbnailSrc === "" ? null : thumbnailSrc) 
</script>

<button class="rounded border flex gap-2 items-center transition" onclick={bubble('click')}>
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
