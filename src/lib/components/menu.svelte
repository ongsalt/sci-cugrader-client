<script lang="ts">
    import type { MenuAction } from "$lib/action";
    import Button from "$lib/components/ui/button/button.svelte";
    import * as Popover from "$lib/components/ui/popover";
    import { cn } from "$lib/utils/ui";
    import { MoreHorizontal, Download } from "lucide-svelte";

    export let actions: MenuAction[] = [];

    let open = false;
</script>

<Popover.Root bind:open>
    <Popover.Trigger>
        <Button variant="ghost" size="icon">
            <MoreHorizontal class="w-4 text-muted-foreground" />
        </Button>
    </Popover.Trigger>
    <Popover.Content
        class="p-0.5 w-52 bg-background/75 backdrop-blur shadow-black/5"
    >
        {#each actions as { name, action, icon: Icon, type }}
            <button
                class={cn(
                    "p-2 py-1.5 rounded-sm transition w-full flex justify-between items-center hover:bg-accent",
                    type === "destructive" && "hover:bg-destructive/5 text-destructive"
                )}
                on:click={() => {
                    open = false;
                    action();
                }}
            >
                {name}
                <Icon class="w-4" />
            </button>
        {/each}
    </Popover.Content>
</Popover.Root>
