import { PUBLIC_BASE_API_URL } from "$env/static/public"
import { z, ZodArray, ZodObject, ZodRecord, type SafeParseReturnType } from "zod"

// We use zod here in case of api definition change. 
type ZObject = ZodObject<{}> | ZodRecord
type ZObjectOrArray = ZObject | ZodArray<ZObject>

export type Endpoint<Query extends ZObject, Response extends ZObjectOrArray, Transformed = z.infer<Response>> = {
    path: string
    query: Query,
    response: Response,
    transformer?: (response: z.infer<Response>) => Transformed,
    requestInit?: RequestInit
}

export function defineEndpoint<Query extends ZObject, Response extends ZObjectOrArray, Transformed>(endpoint: Endpoint<Query, Response, Transformed>) {
    return {
        async call(query: z.infer<Query>) {
            const url = new URL(endpoint.path, PUBLIC_BASE_API_URL)
            for (const [key, value] of Object.entries(query)) {
                url.searchParams.set(key, String(value))
            }
            const response = await fetch(url, {
                mode: "no-cors",
                credentials: "include",
                // method: "POST",
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                },
                ...(endpoint.requestInit)
            })
            // idk why i need type hint here
            const result: SafeParseReturnType<any, z.infer<Response>> = await endpoint.response.safeParseAsync(await response.json())
            if (result.success && endpoint.transformer) {
                return endpoint.transformer(result.data)
            }
            return result       
        }
    }
}
