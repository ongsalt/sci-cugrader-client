<script lang="ts">
    import type { zStudentInfo } from "$lib/api/shared";
    import { hasAuthToken } from "$lib/auth";
    import * as Popover from "$lib/components/ui/popover";
    import {
        Check,
        LogIn,
        LogOut,
        SunMoon,
        User,
        UserX
    } from "lucide-svelte";
    import Moon from "lucide-svelte/icons/moon";
    import Sun from "lucide-svelte/icons/sun";
    import { resetMode, setMode, userPrefersMode } from "mode-watcher";
    import { ArrowLeft } from "svelte-radix";
    import type { z } from "zod";

    // TODO: make a better type
    interface Props {
        auth: z.infer<typeof zStudentInfo> | null;
    }

    $inspect($userPrefersMode);

    const { auth }: Props = $props();
    const _hasAuthToken = hasAuthToken();

    let page: "main" | "theme" = $state("main");

    function to(target: typeof page) {
        return () => (page = target);
    }
</script>

<Popover.Root>
    <Popover.Trigger onclick={to("main")}>
        <div
            class="rounded-full overflow-clip w-9 h-9 bg-muted flex items-center justify-center hover:bg-muted-foreground/15 transition"
        >
            <!-- <img src="" alt="" class="w-8 h-8"> -->
            {#if auth !== null}
                <User class="w-5" />
            {:else if _hasAuthToken}
                <UserX class="w-5 text-destructive" />
            {:else}
                <User class="w-5" />

                <!-- <Menu class="w-5" /> -->
            {/if}
        </div>
    </Popover.Trigger>
    <Popover.Content
        class="p-0 w-64 bg-background/75 backdrop-blur shadow-black/5"
    >
        <div>
            {#if page === "main"}
                {@render main()}
            {:else if page === "theme"}
                {@render themePage()}
            {/if}
        </div>
    </Popover.Content>
</Popover.Root>

{#snippet main()}
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
        <button
            class="p-2 pr-3 rounded-sm hover:bg-foreground/5 transition w-full flex justify-between items-center"
            onclick={to("theme")}
        >
            Theme
            <Sun class="w-4" />
        </button>
        {#if auth !== null}
            <a
                class="p-2 pr-3 rounded-sm hover:bg-destructive/5 text-destructive transition w-full flex justify-between items-center"
                href="/logout"
            >
                Log out
                <LogOut class="w-4" />
            </a>
        {:else}
            <a
                class="p-2 pr-3 rounded-sm hover:bg-primary/5 text-primary transition w-full flex justify-between items-center"
                href="/login"
            >
                {#if _hasAuthToken}
                    Replace auth token
                {:else}
                    Log in
                {/if}
                <LogIn class="w-4" />
            </a>
        {/if}
        <!-- <a href="/logout">Logout</a> -->
    </div>
{/snippet}

{#snippet themePage()}
    <div class="border-b p-2">
        <div class="flex items-center gap-2">
            <button
                class="rounded-full overflow-clip w-9 h-9 bg-muted-foreground/10 flex items-center justify-center hover:bg-muted-foreground/15 transition"
                onclick={to("main")}
            >
                <ArrowLeft class="w-5" />
            </button>
            <span class="font-medium"> Theme </span>
        </div>
    </div>
    <div class="p-1">
        <button
            class="p-2 pr-3 rounded-sm hover:bg-foreground/5 transition w-full flex justify-between items-center"
            onclick={() => setMode("light")}
        >
            <div class="flex items-center gap-3">
                <Check
                    class="w-4 {$userPrefersMode !== 'light'
                        ? 'opacity-0'
                        : ''}"
                />
                Light
            </div>
            <Sun class="w-4" />
        </button>
        <button
            class="p-2 pr-3 rounded-sm hover:bg-foreground/5 transition w-full flex justify-between items-center"
            onclick={() => setMode("dark")}
        >
            <div class="flex items-center gap-3">
                <Check
                    class="w-4 {$userPrefersMode !== 'dark' ? 'opacity-0' : ''}"
                />
                Dark
            </div>
            <Moon class="w-4" />
        </button>
        <button
            class="p-2 pr-3 rounded-sm hover:bg-foreground/5 transition w-full flex justify-between items-center"
            onclick={() => resetMode()}
        >
            <div class="flex items-center gap-3">
                <Check
                    class="w-4 {$userPrefersMode !== 'system'
                        ? 'opacity-0'
                        : ''}"
                />
                System
            </div>
            <SunMoon class="w-4" />
        </button>
    </div>
{/snippet}
