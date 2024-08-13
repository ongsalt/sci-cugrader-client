<script lang="ts">
    import { page } from "$app/stores";
    import Subheader from "$lib/components/sub-header.svelte";
    import { cn } from "$lib/utils/ui";
    import type { LayoutData } from "./$types";

    export let data: LayoutData;
    const { classMeta } = data;
    const classId = $page.params.id;

    $: isPortfolioPage = $page.url.pathname == `/class/${classId}/portfolio`;
</script>

<Subheader
    title={classMeta.name}
    subTitle="{classMeta.code} • {classMeta.semaster}"
    imageUrl={classMeta.thumbnail}
>
    <div class="mt-3 flex items-center gap-1" slot="description">
        <span class="text-muted-foreground">Instructor</span>
        <p>{classMeta.instructor}</p>
    </div>

    <nav class="flex" slot="navigation">
        <div
            class={cn(
                "border-b-2 py-1.5 border-transparent",
                !isPortfolioPage && "border-primary text-primary",
            )}
        >
            <a
                href="/class/1/"
                class={cn(
                    "block rounded hover:bg-accent p-3 py-2 text-sm",
                    isPortfolioPage && "text-muted-foreground",
                )}
            >
                Assignment
            </a>
        </div>
        <div
            class={cn(
                "border-b-2 py-1.5 border-transparent",
                isPortfolioPage && "border-primary text-primary",
            )}
        >
            <a
                href="/class/1/portfolio"
                class={cn(
                    "block rounded hover:bg-accent p-3 py-2 text-sm",
                    !isPortfolioPage && "text-muted-foreground",
                )}
            >
                Portfolio
            </a>
        </div>
    </nav>
</Subheader>

<slot></slot>
