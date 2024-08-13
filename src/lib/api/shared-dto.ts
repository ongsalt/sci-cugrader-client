import validator from "validator";
import { z, ZodType } from "zod";

const { isNumeric } = validator;

export const zStudentInfo = z.object({
    Email: z.string().email(),
    ID: z.string().refine(isNumeric),
    Name: z.string(),
    Role: z.string().refine(isNumeric), // "1" for ST:student "2" for PF (professor i think)
})

export const zClassInfo = z.object({
    ClassID: z.string().refine(isNumeric),
    ClassName: z.string(),
    ID: z.number(),
    Instructor: z.string(),
    Section: z.string().refine(isNumeric),
    Thumbnail: z.string().url().nullable(), // idk if this is url or not
})

export const apiResult = (t: ZodType) => z.object({
    msg: z.string(),
    success: z.literal(false)
}).or(z.object({
    data: t,
    msg: z.string(),
    success: z.literal(true)
}))
