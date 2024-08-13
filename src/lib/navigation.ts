import { page } from "$app/stores";
import { onDestroy, onMount } from "svelte";
import { get, writable } from "svelte/store";

export type NamedRoute = { name: string; route: string, shortName?: string, description?: string }
export const navigationStack = writable<NamedRoute[]>([])

export function defineRoute(name: string, route?: string) {
    onMount(() => {
        navigationStack.update(old => {
            route = route ?? get(page).url.href
            return [...old, { name, route }]
        })
    })
    onDestroy(() => {
        navigationStack.update(it => it.splice(-1, 1))
    })
}
