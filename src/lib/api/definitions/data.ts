import { apiResult, zClassInfo, zStudentInfo } from "$lib/api/shared-dto"
import { defineEndpoint } from "$lib/api/utils"
import { isNumeric } from "validator"
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
        CSYID: z.number() // stands for class StudyYear? id
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
    response: apiResult(z.object({
        Due: z.string(), // in "dd/mm/yyyy hh:mm" 
        LID: z.number(),
        Lab: z.string().refine(isNumeric),
        Late: z.boolean(),
        MaxScore: z.number(),
        Name: z.string(),
        Publish: z.number(), // in "dd/mm/yyyy hh:mm" 
        Score: z.number(),
        TurnIn: z.boolean(),
        hideScore: z.boolean(),
    }).array())
})

export const getStudentAssignment = defineEndpoint({
    path: "/api/ST/assignment/all", // why it's TA
    query: z.object({
        LID: z.number() // probably lab id
    }),
    response: apiResult(z.object({
        Info: z.object({
            Due: z.string(), // in "dd/mm/yyyy hh:mm" 
            Lab: z.string().refine(isNumeric),
            Late: z.boolean(),
            Lock: z.boolean(),
            Name: z.string(),
            Publish: z.number(), // in "dd/mm/yyyy hh:mm" 
        }),
        Question: z.object({
            Date: z.string(), // in "dd/mm/yyyy hh:mm" 
            Max: z.number(),
            QID: z.number(),
            SMT: z.object({
                Date: z.string(), // in "dd/mm/yyyy hh:mm" 
                Filename: z.string(),
                Late: z.number(), // wtf | 0 is not late 
                OriginalName: z.string(),
                SID: z.number(),
            }).optional(),
            Score: z.number(),
            hideScore: z.boolean(),
        }).array()
    }))
})

export const getStudentRank = defineEndpoint({
    path: "/api/ST/class/rank",
    query: z.object({
        CSYID: z.number()
    }),
    response: apiResult(z.object({
        Amount: z.number(), // student amount
        Chart: z.number().array(),
        MaxScore: z.number(),
        Rank: z.number(),
        Score: z.number(),
    }))
})
