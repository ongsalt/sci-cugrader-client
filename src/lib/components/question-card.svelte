<script lang="ts">
    import type { AssignmentMeta, Question } from "$lib/api/types";
    import FileBadge from "$lib/components/file-badge.svelte";
    import ScoreBadge from "$lib/components/score-badge.svelte";
    import { formatDate } from "$lib/utils/date";
    import { Trash, Download } from "lucide-svelte";

    interface Props {
        question: Question;
        index: number;
    }

    let { question, index }: Props = $props();

    const { id, date, maxScore, score, submission } = question;

    let files = $state<FileList | null>(null);
    let file = $derived(files !== null ? files[0] : null);

    function removeFile() {
        files = null;
    }
    // TODO: file size formatter
</script>

<div class="bg-background border rounded-md shadow-sm @container">
    <div class="flex justify-between mt-4 px-4">
        <div>
            <h2 class="text-lg">Question {index}</h2>
        </div>
        <ScoreBadge>{score}/{maxScore}</ScoreBadge>
    </div>
    <div class="grid @xl:grid-cols-2 px-4 gap-x-4 gap-y-2 border-b pb-3">
        <div>
            <h3 class="text-muted-foreground">Attachments</h3>
            <div class="flex flex-wrap gap-2 mt-1">
                <FileBadge
                    name="[TODO: parse file name]"
                    description={formatDate(date)}
                    thumbnailSrc=""
                />
            </div>
        </div>
        <div>
            <h3 class="text-muted-foreground">Submission</h3>
            {#if submission}
                <div class="flex flex-wrap gap-2 mt-1">
                    <FileBadge
                        name={submission.filename}
                        description={formatDate(submission.date)}
                        thumbnailSrc=""
                    />
                </div>
            {/if}
        </div>
    </div>
    <div class="p-4">
        <input type="file" id="file-input-{id}" hidden bind:files />
        {#if file !== null}
            <div class="flex flex-wrap justify-between gap-4 items-center">
                <div>
                    <FileBadge
                        name={file.name}
                        description={`${file.size}`}
                        thumbnailSrc=""
                    />
                </div>
                <div class="flex gap-2">
                    <button
                        class="border transition hover:bg-accent px-4 py-2 rounded-md"
                        onclick={removeFile}
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
        {:else}
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
        {/if}
    </div>
</div>
