<script lang="ts">
    import { Toaster } from "$lib/components/ui/sonner/index.js";
    import { ModeWatcher } from "mode-watcher";
    import type { Snippet } from "svelte";
    import "../app.css";
    import type { LayoutData } from "./$types";
    import Header from "./header.svelte";

    interface Props {
        data: LayoutData;
        children?: Snippet;
    }

    let { data, children }: Props = $props();
</script>

<svelte:head>
    <title>Grader</title>
</svelte:head>

<ModeWatcher />
<Toaster />
<div class="min-h-screen flex flex-col bg-neutral-50 dark:bg-neutral-900">
    <Header auth={data.auth} />
    {@render children?.()}
</div>
