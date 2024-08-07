<script>
    import { page } from "$app/stores";
    import Subheader from "$lib/components/sub-header.svelte";
    import { cn } from "$lib/utils";
    import { User } from "lucide-svelte"

    $: isPortfolioPage =
        $page.url.pathname == `/class/${$page.params.id}/portfolio`;
</script>

<Subheader title="Programming" subTitle="2301173 • 1/2024" imageUrl="sd">
    <div class="mt-3 flex items-center gap-1" slot="description">
        <span class="text-muted-foreground">Instructor</span>
        <p> Naruemon Pratanwanich</p>
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
