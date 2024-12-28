<script lang="ts">
    import "../app.css";
    import { ModeWatcher } from "mode-watcher";
    import Header from "./header.svelte";
    import type { LayoutData } from "./$types";

    interface Props {
        data: LayoutData;
        children?: import('svelte').Snippet;
    }

    let { data, children }: Props = $props();
</script>

<svelte:head>
    <title>Grader</title>
</svelte:head>

<ModeWatcher />
<div class="min-h-screen flex flex-col bg-neutral-50 dark:bg-neutral-900">
    <Header auth={data.auth}/>
    {@render children?.()}
</div>
