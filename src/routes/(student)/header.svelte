<script lang="ts">
    import type { zStudentInfo } from "$lib/api/shared";
    import ThemeToggle from "$lib/components/theme-toggle.svelte";
    import * as Breadcrumb from "$lib/components/ui/breadcrumb/index.js";
    import Button from "$lib/components/ui/button/button.svelte";
    import { useSidebar } from "$lib/components/ui/sidebar";
    import { navigationStack } from "$lib/navigation";
    import { PanelLeftIcon } from "lucide-svelte";
    import type { z } from "zod";
    import UserMenu from "./user-menu.svelte";

    interface Props {
        auth: z.infer<typeof zStudentInfo> | null;
    }

    let { auth }: Props = $props();

    let last = $derived($navigationStack.at(-1));
    let rest = $derived($navigationStack.toSpliced(-1, 1));

    const sidebar = useSidebar();
</script>

<nav
    class="top-0 z-10 sticky bg-background/80 backdrop-blur border-b px-4 pl-2 py-2 flex items-center justify-between"
>
    <div class="flex gap-4 items-center">
        {#if sidebar.isMobile || !sidebar.open}
            <div class="flex gap-2 items-center">
                <Button
                    variant="ghost"
                    size="icon"
                    onclick={() => sidebar.toggle()}
                >
                    <PanelLeftIcon />
                </Button>
                <!-- <h1 class="font-medium">37</h1> -->
                <div class="h-5 border-r-2"></div>
            </div>
        {:else}
            <div class="w-0"></div>
        {/if}
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
                    <Breadcrumb.Page>{last?.name ?? "Root"}</Breadcrumb.Page>
                </Breadcrumb.Item>
            </Breadcrumb.List>
        </Breadcrumb.Root>
    </div>
    <div class="flex gap-4">
        <ThemeToggle />
        <UserMenu {auth} />
    </div>
</nav>
