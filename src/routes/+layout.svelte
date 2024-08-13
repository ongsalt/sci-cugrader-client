<script lang="ts">
    import "../app.css";
    import { navigationStack } from "$lib/navigation";
    import { ModeWatcher } from "mode-watcher";
    import Header from "./header.svelte";

    $: console.log($navigationStack)
</script>

<svelte:head>
    <title>Grader</title>
</svelte:head>

<ModeWatcher />
<div class="min-h-screen flex flex-col bg-neutral-50 dark:bg-neutral-900">
<Header />
    <slot></slot>
</div>
