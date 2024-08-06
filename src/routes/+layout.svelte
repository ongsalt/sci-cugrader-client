<script>
    import "../app.css";
    import Header from "./Header.svelte";
</script>

<svelte:head>
    <title>Grader</title>
</svelte:head>

<div class="min-h-screen bg-neutral-50">
<Header />
    <slot></slot>
</div>
