<script lang="ts">
    import "../app.css";
    import { ModeWatcher } from "mode-watcher";
    import Header from "./header.svelte";
    import type { LayoutData } from "./$types";

    export let data: LayoutData;
</script>

<svelte:head>
    <title>Grader</title>
</svelte:head>

<ModeWatcher />
<div class="min-h-screen flex flex-col bg-neutral-50 dark:bg-neutral-900">
    <Header auth={data.auth}/>
    <slot></slot>
</div>
