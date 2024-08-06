import { PUBLIC_BASE_API_URL } from "$env/static/public"
import { z, ZodObject, ZodRecord, type SafeParseReturnType } from "zod"

// We use zod here in case of api definition change. 
type ZObject = ZodObject<{}> | ZodRecord
type ZObjectOrArray = ZObject

export type Endpoint<Query extends ZObject, Response extends ZObjectOrArray> = {
    path: string
    query: Query,
    response: Response
}

export function defineEndpoint<Query extends ZObject, Response extends ZObjectOrArray>(endpoint: Endpoint<Query, Response>) {
    return {
        async call(query: z.infer<Query>) {
            const url = new URL(endpoint.path, PUBLIC_BASE_API_URL)
            for (const [key, value] of Object.entries(query)) {
                url.searchParams.set(key, String(value))
            }
            const response = await fetch(url, {
                mode: "no-cors",
            })
            // idk why i need type hint here
            const result: SafeParseReturnType<any, z.infer<Response>> = await endpoint.response.safeParseAsync(await response.json())
            return result
        }
    }
}
