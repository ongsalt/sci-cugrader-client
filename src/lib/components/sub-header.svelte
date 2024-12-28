<script lang="ts">
    interface Props {
        title: string;
        subTitle: string;
        imageUrl?: string | null;
        description?: import('svelte').Snippet;
        navigation?: import('svelte').Snippet;
    }

    let {
        title,
        subTitle,
        imageUrl = null,
        description,
        navigation
    }: Props = $props();
</script>

<header class="bg-background border-b px-4">
    <div class="pt-6 pb-2 px-3 flex justify-between flex-wrap gap-4">
        <div>
            <h2 class="text-lg font-semibold">{title}</h2>
            <h3 class="text-muted-foreground">{subTitle}</h3>
            {@render description?.()}
        </div>
        {#if imageUrl != null}
            <img src={imageUrl} alt="Icon" class="w-20 h-20" />
        {/if}
    </div>
    {#if navigation}{@render navigation()}{:else}
        <div class="mt-4"></div>
    {/if}
</header>
