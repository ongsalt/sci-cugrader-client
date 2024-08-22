<script lang="ts">
    import * as Breadcrumb from "$lib/components/ui/breadcrumb/index.js";
    import { Route, User } from "lucide-svelte";
    import { navigationStack } from "$lib/navigation";

    $: last = $navigationStack.at(-1);
    $: rest = $navigationStack.toSpliced(-1, 1);
</script>

<nav
    class="top-0 z-10 sticky bg-background/80 backdrop-blur border-b px-4 py-2 flex items-center justify-between"
>
    <div class="flex gap-4 items-center">
        <h1 class="font-medium">37</h1>
        <div class="h-5 border-r-2"></div>
        <Breadcrumb.Root>
            <Breadcrumb.List>
                {#each rest as route}
                    <Breadcrumb.Item>
                        <Breadcrumb.Link href={route.route}
                            >{route.name}</Breadcrumb.Link
                        >
                    </Breadcrumb.Item>
                    <Breadcrumb.Separator />
                {/each}
                <Breadcrumb.Item>
                    <Breadcrumb.Page>{last?.name ?? "Page"}</Breadcrumb.Page>
                </Breadcrumb.Item>
            </Breadcrumb.List>
        </Breadcrumb.Root>
    </div>
    <div
        class="rounded-full overflow-clip w-8 h-8 bg-muted flex items-center justify-center"
    >
        <!-- <img src="" alt="" class="w-8 h-8"> -->
        <User class="w-5" />
    </div>
</nav>
