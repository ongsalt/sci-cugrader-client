<script lang="ts">
    import Navigator from "$lib/components/navigator.svelte";
    import type { Snippet } from "svelte";
    import UserMenu from "../../lib/components/user-menu.svelte";
    import type { LayoutData } from "./$types";

    interface Props {
        data: LayoutData;
        children?: Snippet;
    }

    let { data, children }: Props = $props();
</script>

<nav
    class="top-0 z-10 sticky bg-background/80 backdrop-blur border-b px-4 pl-2 py-2 flex items-center justify-between"
>
    <div class="flex gap-4 items-center ml-4">
        <Navigator />
    </div>
    <div class="flex gap-4">
        <UserMenu auth={data.auth} />
    </div>
</nav>
{@render children?.()}
