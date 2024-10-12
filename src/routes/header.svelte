<script lang="ts">
    import * as Breadcrumb from "$lib/components/ui/breadcrumb/index.js";
    import { User } from "lucide-svelte";
    import { navigationStack } from "$lib/navigation";
    import UserMenu from "./user-menu.svelte";
    import type { z } from "zod";
    import type { zStudentInfo } from "$lib/api/shared";

    export let auth: z.infer<typeof zStudentInfo> | null

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
                    <Breadcrumb.Page>{last?.name ?? "Root"}</Breadcrumb.Page>
                </Breadcrumb.Item>
            </Breadcrumb.List>
        </Breadcrumb.Root>
    </div>
    <UserMenu {auth}/>
</nav>
