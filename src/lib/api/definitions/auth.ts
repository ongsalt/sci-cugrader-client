import { apiResult, zStudentInfo } from "$lib/api/shared-dto"
import { defineEndpoint } from "$lib/api/utils"
import { isNumeric } from "validator"
import { z } from "zod"

/**
 * Auth
 *  redirect to google
 *  then google will redirect back to
 *  /callback?
 *   state
 *   code 
 *   scope 
 *   authuser={some number}
 *   hd={chula email domain}
 *   prompt=none
 *  which is a page that will call /api/glob/auth/callback?state&url
 *   state={google state}
 *   url={/callback?whatever}
 */

export const authCallback = defineEndpoint({
    path: "/api/glob/auth/callback",
    query: z.object({
        state: z.string(),
        url: z.string().url()
    }),
    response: apiResult(z.object({
        csrf_token: z.string(),
        email: z.string().email(),
        role: z.number(), // "1" for ST:student "2" for PF (professor i think)        
        uid: z.string().refine(isNumeric),
    }))
})


export const getAuth = defineEndpoint({
    path: "/api/glob/auth/checkauth",
    query: z.object({}),
    response: z.object({
        data: zStudentInfo,
        msg: z.string(),
        success: z.boolean()
    })
})
