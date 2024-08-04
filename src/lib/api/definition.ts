import { date, z, ZodObject } from "zod"
import { isNumeric } from "validator"

// We use zod here in case of api definition change. 

export type Endpoint<Query extends ZodObject<{}>, Response extends ZodObject<{}>> = {
    path: string
    query: Query,
    response: Response
}

function defineEndpoint<Q extends ZodObject<{}>, R extends ZodObject<{}>>(endpoint: Endpoint<Q, R>) {
    return endpoint
}

const zUserInfo = z.object({
    Email: z.string().email(),
    ID: z.string().refine(isNumeric),
    Name: z.string(),
    Role: z.string(), // "1" for ST:student "2" for PF (professor i think)
})

export const checkauth = defineEndpoint({
    path: "/api/glob/auth/checkauth",
    query: z.object({}),
    response: z.object({
        data: zUserInfo,
        msg: z.string(),
        success: z.boolean()
    })
})

export const profile = defineEndpoint({
    path: "/api/ST/user/profile",
    query: z.object({}),
    response: zUserInfo,   
})

export const getStudentClasses = defineEndpoint({
    path: "api/ST/class/classes",
})