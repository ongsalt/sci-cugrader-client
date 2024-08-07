<script lang="ts">
    import * as Breadcrumb from "$lib/components/ui/breadcrumb/index.js";
    import { User } from "lucide-svelte";
</script>

<nav
    class="top-0 z-10 sticky bg-background/80 backdrop-blur border-b px-4 py-2 flex items-center justify-between"
>
    <div class="flex gap-4 items-center">
        <h1 class="font-medium">37</h1>
        <div class="h-5 border-r-2"></div>
        <Breadcrumb.Root>
            <Breadcrumb.List>
                <Breadcrumb.Item>
                    <Breadcrumb.Link href="/home">Home</Breadcrumb.Link>
                </Breadcrumb.Item>
                <Breadcrumb.Separator />
                <Breadcrumb.Item>
                    <Breadcrumb.Link href="/class/1"
                        >Programming</Breadcrumb.Link
                    >
                </Breadcrumb.Item>
                <Breadcrumb.Separator />
                <Breadcrumb.Item>
                    <Breadcrumb.Page>Lab 1</Breadcrumb.Page>
                </Breadcrumb.Item>
            </Breadcrumb.List>
        </Breadcrumb.Root>
    </div>
    <div class="rounded-full overflow-clip w-8 h-8 bg-primary-50 flex items-center justify-center">
        <!-- <img src="" alt="" class="w-8 h-8"> -->
        <User class="w-5 text-primary"/>
    </div>
</nav>
