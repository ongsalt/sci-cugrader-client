<script lang="ts">
    import { defineRoute } from "$lib/navigation";
    import type { Snippet } from "svelte";
    import Header from "../../lib/components/header.svelte";
    import AppSidebar from "./app-sidebar.svelte";
    import * as Sidebar from "$lib/components/ui/sidebar/index.js";
    import type { LayoutData } from "./$types";

    interface Props {
        children?: Snippet;
        data: LayoutData;
    }

    let { children, data }: Props = $props();

    defineRoute("Home", "/home");
</script>

<Sidebar.Provider>
    <AppSidebar classes={data.classes} />
    <div class="w-full">
        <Header auth={data.auth} />
        {@render children?.()}
    </div>
</Sidebar.Provider>
