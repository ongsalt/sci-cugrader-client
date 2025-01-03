<script lang="ts">
    import { flyAndScale } from "$lib/utils/animation";
    import type { Snippet } from "svelte";
    import { Spring } from "svelte/motion";
    import { blur, fly } from "svelte/transition";

    type Props = {
        children: Snippet;
        animatedHeight?: boolean;
        contentKey?: string | number;
        animatedWidth?: boolean;
        class?: string;
        reverse?: boolean;
    };

    let {
        children,
        reverse = false,
        contentKey,
        class: className = "",
        animatedHeight = true,
        animatedWidth = false,
    }: Props = $props();

    const width = new Spring(0);
    const height = new Spring(0);

    let reverseMultiplier = $derived(reverse ? -1 : 1);
    let targetHeight = $state(0);
    let targetWidth = $state(0);
    let shouldSkip = $state(true);

    $effect(() => {
        width.set(targetWidth, { instant: shouldSkip });
        height.set(targetHeight, { instant: shouldSkip });
        shouldSkip = false;
    });

    let style = $derived.by(() => {
        let out = "";
        if (animatedHeight) {
            out += `height: ${height.current}px; `;
        }

        if (animatedWidth) {
            out += `width: ${width.current}px; `;
        }

        return out;
    });
</script>

<div class="relative overflow-hidden {className}" {style}>
    {#key contentKey}
        <div
            class="w-full absolute"
            bind:clientWidth={targetWidth}
            bind:clientHeight={targetHeight}
            in:fly={{ x: 100 * reverseMultiplier, duration: 250 }}
            out:fly={{ x: -100 * reverseMultiplier, duration: 250 }}
        >
            {@render children()}
        </div>
    {/key}
</div>
