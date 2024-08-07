<script>
    import "../app.css";
    import { ModeWatcher } from "mode-watcher";
    import Header from "./header.svelte";
</script>

<svelte:head>
    <title>Grader</title>
</svelte:head>

<ModeWatcher />
<div class="min-h-screen bg-neutral-50 dark:bg-neutral-900">
<Header />
    <slot></slot>
</div>
