import { defineEndpoint } from "$lib/api/core"
import { apiResult, parseApiDate, zClassInfo, zStudentInfo } from "$lib/api/shared"
import type { Assignment, AssignmentMeta, Class, ClassMeta, Question } from "$lib/api/types"
import validator from "validator"
import { z } from "zod"

const { isNumeric } = validator

export const getStudentProfile = defineEndpoint({
    path: "api/ST/user/profile",
    query: z.object({}),
    response: zStudentInfo,
})

export const getStudentClasses = defineEndpoint({
    path: "api/ST/class/classes",
    query: z.object({}),
    response: z.record(z.string(), zClassInfo.array()), // key example "1/2024",
    transformer: it => {
        const out: Record<string, Class[]> = {}
        for (const [semester, classes] of Object.entries(it)) {
            out[semester] = classes.map(it => ({
                code: it.ClassID,
                id: it.ID,
                instructor: it.Instructor,
                section: it.Section,
                name: it.ClassName,
                thumbnail: it.Thumbnail ?? undefined
            }))
        }
        return out
    }
})

export const getStudentClass = defineEndpoint({
    path: "api/TA/class/class", // why it's TA
    query: z.object({
        CSYID: z.number() // stands for class StudyYear? id
    }),
    response: zClassInfo
        .omit({ ID: true, Section: true })
        .merge(z.object({
            Archive: z.boolean(),
            ClassYear: z.string()
        })).transform(it => ({
            archive: it.Archive,
            code: it.ClassID,
            name: it.ClassName,
            instructor: it.Instructor,
            semaster: it.ClassYear,
            thumbnail: it.Thumbnail ?? undefined
        } satisfies ClassMeta)),
})

export const getStudentAssignments = defineEndpoint({
    path: "api/ST/assignment/all", // why it's TA
    query: z.object({
        CID: z.number() // probably class id
    }),
    response: apiResult(
        z.object({
            Due: z.string(), // in "dd/mm/yyyy hh:mm" 
            LID: z.number(),
            Lab: z.string().refine(isNumeric),
            Late: z.boolean(),
            MaxScore: z.number(),
            Name: z.string(),
            Publish: z.string(), // in "dd/mm/yyyy hh:mm" 
            Score: z.number(),
            TurnIn: z.boolean(),
            hideScore: z.boolean(),
        })
            .transform(
                it => ({
                    due: parseApiDate(it.Due),
                    publish: parseApiDate(it.Publish),
                    id: it.LID,
                    lab: it.Lab,
                    name: it.Name,
                    hideScore: it.hideScore,
                    isLate: it.Late,
                    isTurnedIn: it.TurnIn,
                    maxScore: it.MaxScore,
                    score: it.Score
                } satisfies Assignment)
            )
            .array()
    ),
})

export const getStudentAssignment = defineEndpoint({
    path: "api/ST/assignment/specific",
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
            Publish: z.string(), // in "dd/mm/yyyy hh:mm" 
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
    })
        .transform(it => ({
            info: {
                due: parseApiDate(it.Info.Due),
                publish: parseApiDate(it.Info.Publish),
                isLate: it.Info.Late,
                isLocked: it.Info.Lock,
                name: it.Info.Name,
                lab: it.Info.Lab,
            },
            questions: it.Question.map(it => ({
                id: it.QID,
                date: parseApiDate(it.Date),
                maxScore: it.Max,
                score: it.Score,
                hideScore: it.hideScore,
                submission: it.SMT === undefined ? undefined : {
                    date: parseApiDate(it.SMT.Date),
                    filename: it.SMT.Filename,
                    isLate: it.SMT.Late !== 0, // WTF
                    originalName: it.SMT.OriginalName,
                    id: it.SMT.SID
                },
            } satisfies Question))
        } satisfies AssignmentMeta))
    ),
})

export const getStudentRank = defineEndpoint({
    path: "api/ST/class/rank",
    query: z.object({
        CSYID: z.number()
    }),
    response: apiResult(z.object({
        Amount: z.number(), // student amount
        Chart: z.number().array(),
        MaxScore: z.number(),
        Rank: z.number(),
        Score: z.number(),
    })),
})
