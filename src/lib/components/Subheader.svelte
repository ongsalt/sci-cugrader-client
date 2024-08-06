<script lang="ts">
    export let title: string;
    export let subTitle: string;
    export let imageUrl: string | null = null;
</script>

<header class="bg-white border-b px-4">
    <div class="pt-6 pb-2 px-3 flex justify-between flex-wrap gap-4">
        <div>
            <h2 class="text-lg font-semibold">{title}</h2>
            <h3 class="text-neutral-500">{subTitle}</h3>
            <slot name="description"/>
        </div>
        {#if imageUrl != null}
            <img src={imageUrl} alt="Icon" class="w-20 h-20" />
        {/if}
    </div>
    <slot name="navigation">
        <div class="mt-4"></div>
    </slot>
</header>
