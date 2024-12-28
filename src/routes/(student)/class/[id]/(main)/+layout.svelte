<script lang="ts">
    import { page } from "$app/stores";
    import Subheader from "$lib/components/sub-header.svelte";
    import { cn } from "$lib/utils/ui";
    import type { LayoutData } from "./$types";
    import placeholderImage from "$lib/assets/placeholder.png";

    interface Props {
        data: LayoutData;
        children?: import('svelte').Snippet;
    }

    let { data, children }: Props = $props();
    const { meta } = data;
    const classId = $page.params.id;

    let isPortfolioPage = $derived($page.url.pathname == `/class/${classId}/portfolio`);
</script>

<Subheader
    title={meta.class.name}
    subTitle="{meta.class.code} • {meta.class.semaster}"
    imageUrl={meta.class.thumbnail ?? placeholderImage}
>
    {#snippet description()}
        <div class="mt-3 flex items-center gap-1" >
            <span class="text-muted-foreground">Instructor</span>
            <p>{meta.class.instructor}</p>
        </div>
    {/snippet}

    {#snippet navigation()}
        <nav class="flex" >
            <div
                class={cn(
                    "border-b-2 py-1.5 border-transparent",
                    !isPortfolioPage && "border-primary text-primary",
                )}
            >
                <a
                    href={isPortfolioPage ? `/class/${classId}/` : ""}
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
                    href={isPortfolioPage ? "" : `/class/${classId}/portfolio`}
                    class={cn(
                        "block rounded hover:bg-accent p-3 py-2 text-sm",
                        !isPortfolioPage && "text-muted-foreground",
                    )}
                >
                    Portfolio
                </a>
            </div>
        </nav>
    {/snippet}
</Subheader>

{@render children?.()}
