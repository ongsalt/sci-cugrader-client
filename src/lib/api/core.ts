import { PUBLIC_PROXY_BASE_URL } from "$env/static/public"
import { z, ZodType, type SafeParseReturnType } from "zod"

// We use zod here in case of api definition change. 

export type Endpoint<Query extends ZodType, Response extends ZodType, Transformed = z.infer<Response>> = {
    path: string
    query: Query,
    response: Response,
    transformer?: (response: z.infer<Response>) => Transformed,
    requestInit?: RequestInit
}

/*
Thing that can fuck this up
    - CORS
    - Fetch Credentials
    - SameSite=Strict,
    - Access-Control-Allow-Credentials
    - Google Oauth redirect URL
        ok im done redirect_uri_mismatch
Everything except the last one can be fixed with a proxy.
*/

export function defineEndpoint<Query extends ZodType, Response extends ZodType, Transformed>(endpoint: Endpoint<Query, Response, Transformed>) {
    return {
        async call(query: z.infer<Query>, fetch = window.fetch) {
            const url = new URL(endpoint.path, PUBLIC_PROXY_BASE_URL)
            console.log(url.pathname)
            for (const [key, value] of Object.entries(query)) {
                url.searchParams.set(key, String(value))
            }
            const response = await fetch(url, {
                credentials: "include",
                // method: "POST",
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                },
                ...(endpoint.requestInit)
            })
            // idk why i need type hint here
            const t = await response.text()
            console.log(t)
            const result: SafeParseReturnType<any, z.infer<Response>> = await endpoint.response.safeParseAsync(JSON.parse(t))

            return result
        }
    }
}
