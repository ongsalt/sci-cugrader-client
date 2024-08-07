<script lang="ts">
    import FileBadge from "$lib/components/file-badge.svelte";
    import ScoreBadge from "$lib/components/score-badge.svelte";

    const id = crypto.randomUUID()
    let files: FileList | null;
    $: file = files != null ? files[0] : null;
    
    function removeFile() {
        files = null;
    }
    // TODO: file size formatter
</script>

<div class="bg-background border rounded-md shadow-sm @container">
    <div class="flex justify-between mt-4 px-4">
        <div>
            <h2 class="text-lg">Question 1</h2>
        </div>
        <ScoreBadge>6.67/10</ScoreBadge>
    </div>
    <div class="grid @xl:grid-cols-2 px-4 gap-x-4 gap-y-2 border-b pb-3">
        <div>
            <h3>Attachments</h3>
            <div class="flex flex-wrap gap-2 mt-1">
                <FileBadge
                    name="6734468123-L1-Q2.ipynb"
                    description="1.2 MB"
                    thumbnailSrc=""
                />
            </div>
            <p class="text-sm text-muted-foreground mt-1">
                Uploaded: 05/08/2024 12:47
            </p>
        </div>
        <div>
            <h3>Submission</h3>
            <div class="flex flex-wrap gap-2 mt-1">
                <FileBadge
                    name="6734468123-L1-Q2.ipynb"
                    description="1.2 MB"
                    thumbnailSrc=""
                />
            </div>
            <p class="text-sm text-muted-foreground mt-1">
                Submitted: 05/08/2024 12:47
            </p>
        </div>
    </div>
    <div class="p-4">
        <input type="file" id="file-input-{id}" hidden bind:files />
        {#if file == null}
            <label
                for="file-input-{id}"
                class="block cursor-pointer text-center w-full rounded p-4 border border-dashed transition text-muted-foreground hover:bg-accent"
            >
                Drag and drop file here or <span
                    class="underline underline-offset-2"
                >
                    Choose file
                </span>
            </label>
        {:else}
            <div class="flex flex-wrap justify-between gap-4 items-center">
                <div>
                    <FileBadge
                        name={file.name}
                        description={file.size}
                        thumbnailSrc=""
                    />
                </div>
                <div class="flex gap-2">
                    <button
                        class="border transition hover:bg-accent px-4 py-2 rounded-md"
                        on:click={removeFile}
                    >
                        Remove
                    </button>
                    <button
                        class="bg-primary transition hover:bg-primary-600 border text-white px-4 py-2 rounded-md"
                    >
                        Submit
                    </button>
                </div>
            </div>
        {/if}
    </div>
</div>
