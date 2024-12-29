<script lang="ts">
    import Calendar from "lucide-svelte/icons/calendar";
    import House from "lucide-svelte/icons/house";
    import Inbox from "lucide-svelte/icons/inbox";
    import Search from "lucide-svelte/icons/search";
    import Settings from "lucide-svelte/icons/settings";
    import * as Sidebar from "$lib/components/ui/sidebar/index.js";
    import { Button } from "$lib/components/ui/button";
    import { PanelLeftIcon } from "lucide-svelte";
    import type { LayoutData } from "./$types";

    type Props = {
        classes?: LayoutData["classes"];
    };

    let { classes = {} }: Props = $props();

    const sidebar = Sidebar.useSidebar();
</script>

<Sidebar.Root>
    <Sidebar.Header class="flex-row items-center gap-2">
        <Button variant="ghost" size="icon" onclick={() => sidebar.toggle()}>
            <PanelLeftIcon />
        </Button>
        <!-- <h1 class="font-medium">37</h1> -->
    </Sidebar.Header>
    <Sidebar.Content>
        {#each Object.entries(classes) as [semaster, classesInSemaster]}
            <Sidebar.Group>
                <Sidebar.GroupLabel>{semaster}</Sidebar.GroupLabel>
                <Sidebar.GroupContent>
                    <Sidebar.Menu>
                        {#each classesInSemaster as { id, name } (id)}
                            <Sidebar.MenuItem>
                                <Sidebar.MenuButton>
                                    {#snippet child({ props })}
                                        <a href="/class/{id}" {...props}>
                                            <span>{name}</span>
                                        </a>
                                    {/snippet}
                                </Sidebar.MenuButton>
                            </Sidebar.MenuItem>
                        {/each}
                    </Sidebar.Menu>
                </Sidebar.GroupContent>
            </Sidebar.Group>
        {:else}
            <h3>No class yet...</h3>
            <img src="/ame.gif" alt="ame spinning" />
        {/each}
    </Sidebar.Content>
    <Sidebar.Footer />
</Sidebar.Root>
