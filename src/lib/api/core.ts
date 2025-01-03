import { env } from "$env/dynamic/public";
import type { APIErrorKind } from "$lib/api/error";
import { err, ok, Result } from "neverthrow";
import { z, ZodType, type SafeParseReturnType } from "zod";

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

export function defineEndpoint<Query extends ZodType, Response extends ZodType, Transformed = z.infer<Response>>(endpoint: Endpoint<Query, Response, Transformed>) {
    if (!endpoint.transformer) {
        endpoint.transformer = (it) => it
    }

    // TODO: stop nesting result
    return {
        async call(query: z.infer<Query>, fetch = window.fetch): Promise<Result<Transformed, APIErrorKind>> { // assuming no network error
            const url = new URL(endpoint.path, env.PUBLIC_PROXY_BASE_URL)
            for (const [key, value] of Object.entries(query)) {
                url.searchParams.set(key, String(value))
            }

            // Ok this doesnt work on cloudflare worker 
            // fetch on vercel is node's but on cf is its own custom runtime (wintercg spec i guess) 
            // and for whatever tf reason it doesnt support fetch credentials
            // LIke wtf this is not a browser api this is a SERVER SIDE API 
            const response = await fetch(url, {
                // credentials: "include", // it's "same-origin" by default
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                },
                ...(endpoint.requestInit)
            })

            if (!response.ok) {
                return err("network")
            }

            const json = await response.json()

            const result: SafeParseReturnType<any, z.infer<Response>> = await endpoint.response.safeParseAsync(json)
            if (result.success) {
                return ok(endpoint.transformer!(result.data))
            } else {
                console.log({
                    received: json,
                })
                console.error(result.error)
                return err("definition-changed")
            }
        }
    }
}

