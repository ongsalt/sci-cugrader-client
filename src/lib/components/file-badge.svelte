<script lang="ts">
    import placeholderImage from "$lib/assets/placeholder2.png";
    import Menu from "$lib/components/menu.svelte";

    type Props = {
        thumbnailSrc?: string
        name: string,
        description: string,
        download?: () => unknown,
        resubmit?: () => unknown
    }

    let {
        thumbnailSrc,
        name,
        description,
        download,
        resubmit
    }: Props = $props();

    let _thumbnailSrc = $derived(thumbnailSrc === "" ? null : thumbnailSrc) 
</script>

<div class="rounded border flex gap-2 items-center transition">
    <img
        src={_thumbnailSrc ?? placeholderImage}
        alt="File thumbnail"
        class="ml-1 my-1 w-10 h-10 rounded bg-accent object-cover"
    />
    <div class="pr-3 text-left text-sm">
        <p>{name}</p>
        <p class="text-muted-foreground">{description}</p>
    </div>
</div>
