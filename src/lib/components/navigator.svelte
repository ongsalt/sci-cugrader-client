<script lang="ts">
    import * as Breadcrumb from "$lib/components/ui/breadcrumb/index.js";
    import { navigationStack } from "$lib/navigation";

    let last = $derived($navigationStack.at(-1));
    let rest = $derived($navigationStack.toSpliced(-1, 1));
</script>

<Breadcrumb.Root>
    <Breadcrumb.List>
        {#each rest as route}
            <Breadcrumb.Item>
                <Breadcrumb.Link href={route.route}
                    >{route.name}</Breadcrumb.Link
                >
            </Breadcrumb.Item>
            <Breadcrumb.Separator />
        {/each}
        <Breadcrumb.Item>
            <Breadcrumb.Page>{last?.name ?? "Home"}</Breadcrumb.Page>
        </Breadcrumb.Item>
    </Breadcrumb.List>
</Breadcrumb.Root>
