<script lang="ts">
    import type { zStudentInfo } from "$lib/api/shared";
    import { hasAuthToken } from "$lib/auth";
    import * as Popover from "$lib/components/ui/popover";
    import { User, UserX, LogIn, LogOut } from "lucide-svelte";
    import type { z } from "zod";

    // TODO: make a better type
    export let auth: z.infer<typeof zStudentInfo> | null;
    const _hasAuthToken = hasAuthToken();
</script>

<Popover.Root>
    <Popover.Trigger>
        <div
            class="rounded-full overflow-clip w-8 h-8 bg-muted flex items-center justify-center hover:bg-muted-foreground/15 transition"
        >
            <!-- <img src="" alt="" class="w-8 h-8"> -->
            {#if auth !== null}
                <User class="w-5" />
            {:else if _hasAuthToken}
                <UserX class="w-5 text-destructive" />
            {:else}
                <LogIn class="w-5" />
            {/if}
        </div>
    </Popover.Trigger>
    <Popover.Content
        class="p-0 w-64 bg-background/75 backdrop-blur shadow-black/5"
    >
        <div class="border-b p-3">
            {#if auth !== null}
                <h3 class="font-medium">{auth.Name}</h3>
                <!-- <p class="text-sm text-muted-foreground">{auth.ID}</p> -->
                <p class="text-sm text-muted-foreground">{auth.Email}</p>
            {:else if _hasAuthToken}
                <h3 class="font-medium">Invalid login token</h3>
                <p class="text-sm text-muted-foreground">Please login again</p>
            {:else}
                <h3 class="font-medium">Not logged in</h3>
                <p class="text-sm text-muted-foreground">
                    Some feature might be unavailable.
                </p>
            {/if}
        </div>
        <div class="p-1">
            {#if auth !== null}
                <a
                    class="p-2 rounded-sm hover:bg-destructive/5 text-destructive transition w-full flex justify-between items-center"
                    href="/logout"
                >
                    Log out
                    <LogOut class="w-4" />
                </a>
            {:else}
                <a
                    class="p-2 rounded-sm hover:bg-primary/5 text-primary transition w-full flex justify-between items-center"
                    href="/login"
                >
                    Log in
                    <LogIn class="w-4" />
                </a>
            {/if}
            <!-- <a href="/logout">Logout</a> -->
        </div>
    </Popover.Content>
</Popover.Root>
