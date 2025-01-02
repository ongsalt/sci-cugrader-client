<script lang="ts">
    import type { zStudentInfo } from "$lib/api/shared";
    import Navigator from "$lib/components/navigator.svelte";
    import Button from "$lib/components/ui/button/button.svelte";
    import { useSidebar } from "$lib/components/ui/sidebar";
    import { PanelLeftIcon } from "lucide-svelte";
    import type { z } from "zod";
    import UserMenu from "./user-menu.svelte";

    interface Props {
        auth: z.infer<typeof zStudentInfo> | null;
    }

    let { auth }: Props = $props();

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

        <Navigator />
    </div>
    <div class="flex gap-4">
        <UserMenu {auth} />
    </div>
</nav>
