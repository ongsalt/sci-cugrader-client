<script>
    import Subheader from "$lib/components/Subheader.svelte";

</script>
<main class="">
    <Subheader title="Lab 1" subTitle="Lab 1">
        <div class="mt-2" slot="description">
            <p>
                [icon] 05/08/2024 11:00
            </p>
            <p>
                [icon] 19/08/2024 11:00
            </p>
        </div>
    </Subheader>   
    <div class="p-6">
        <div class="bg-white border rounded-md">
            <div class="border-b">
                <div class="flex justify-between p-4 border-b">
                    <div>
                        <h2 class="text-lg">Question 1</h2>
                        <h3 class="text-sm">
                            Submitted: 6734468123-L1-Q1.ipynb 05/08/2024 12:47
                        </h3>
                    </div>
                    <div
                        class="rounded-full py-1 px-2 h-fit bg-blue-50 text-blue-500"
                    >
                        6.67/10
                    </div>
                </div>
                <div class="p-4 py-2">
                    <p>Attachments</p>
                    <div class="flex flex-wrap gap-2">
                        <div class="rounded border flex gap-2 items-center">
                            <img src="" alt="" class="ml-1 my-1 w-10 h-10 rounded bg-neutral-100">
                            <div class="pr-3">
                                <p>L1-Q2.ipynb</p>
                                <p class="text-sm text-neutral-500">1.2 MB</p>
                            </div>
                        </div>
                    </div>

                    <p>Submission</p>
                </div>
            </div>
        </div>
    </div>
</main>
