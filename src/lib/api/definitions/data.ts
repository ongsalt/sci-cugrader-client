import { zClassInfo, zStudentInfo } from "$lib/api/shared-dto"
import { defineEndpoint } from "$lib/api/utils"
import { z } from "zod"

export const getStudentProfile = defineEndpoint({
    path: "/api/ST/user/profile",
    query: z.object({}),
    response: zStudentInfo,
})

export const getStudentClasses = defineEndpoint({
    path: "/api/ST/class/classes",
    query: z.object({}),
    response: z.record(z.string(), zClassInfo) // key example "1/2024"
})

export const getStudentClass = defineEndpoint({
    path: "/api/TA/class/class", // why it's TA
    query: z.object({
        CSYID: z.number() // stands for class SY? id
    }),
    response: zClassInfo
        .omit({ ID: true })
        .merge(z.object({
            Archive: z.boolean()
        }))
})

export const getStudentAssignments = defineEndpoint({
    path: "/api/ST/assignment/all", // why it's TA
    query: z.object({
        CID: z.number() // probably class id
    }),
    response: zClassInfo
        .omit({ ID: true })
        .merge(z.object({
            Archive: z.boolean()
        }))
})

