<script>
    import { page } from "$app/stores";
    import Subheader from "$lib/components/Subheader.svelte";
    import { cn } from "$lib/utils";

    $: isPortfolioPage =
        $page.url.pathname == `/class/${$page.params.id}/portfolio`;
</script>

<Subheader title="Programming" subTitle="2301173 • 1/2024" imageUrl="sd">
    <div class="mt-2" slot="description">
        <p>
            [icon] Naruemon Pratanwanich
        </p>
    </div>

    <nav class="flex" slot="navigation">
        <div
            class={cn(
                "border-b-2 py-1.5 border-transparent",
                !isPortfolioPage && "border-cyan-500 text-cyan-600",
            )}
        >
            <a
                href="/class/1/"
                class={cn(
                    "block rounded hover:bg-neutral-500/10 p-3 py-2 text-sm",
                    isPortfolioPage && "text-neutral-500",
                )}
            >
                Assignment
            </a>
        </div>
        <div
            class={cn(
                "border-b-2 py-1.5 border-transparent",
                isPortfolioPage && "border-cyan-500 text-cyan-600",
            )}
        >
            <a
                href="/class/1/portfolio"
                class={cn(
                    "block rounded hover:bg-neutral-500/10 p-3 py-2 text-sm",
                    !isPortfolioPage && "text-neutral-500",
                )}
            >
                Portfolio
            </a>
        </div>
    </nav>
</Subheader>

<slot></slot>
