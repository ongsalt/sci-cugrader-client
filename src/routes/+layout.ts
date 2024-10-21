import { getAuth } from "$lib/api/definitions/auth";
import type { LayoutLoad } from "./$types";

export const ssr = false
export const prerender = false

export const load: LayoutLoad = async ({ fetch }) => {
    // TODO: error handling
    const auth = (await getAuth.call({}, fetch))

    if (auth.isErr || auth.value.isErr) {
        return {
            auth: null
        }
    }
    
    return {
        auth: auth.value.value
    }
}