import type { ErrorKind } from "$lib/api/error";
import { err, ok, Result } from "neverthrow";
import validator from "validator";
import { z, ZodType } from "zod";

const { isNumeric } = validator;

export const zStudentInfo = z.object({
    Email: z.string().email(),
    ID: z.string().refine(isNumeric),
    Name: z.string(),
    Role: z.string().refine(isNumeric), // "1" for ST:student "2" for PF (professor i think)
});

export const zClassInfo = z.object({
    ClassID: z.string().refine(isNumeric),
    ClassName: z.string(),
    ID: z.number(),
    Instructor: z.string(),
    Section: z.string().refine(isNumeric),
    Thumbnail: z.string().nullable(), // ok its not
});

export function apiResult<T extends ZodType>(t: T) {
    return z.object({
        data: z.never().or(z.undefined()), // TODO: fix this 
        msg: z.string(),
        success: z.literal(false)
    }).or(z.object({
        data: t,
        msg: z.string(),
        success: z.literal(true)
    })).transform(it => {
        if (it.success) {
            return ok(it.data as z.infer<T>);
        } else {
            return err<never, ErrorKind>("definition-changed");
        }
    });
}

export function parseApiDate(str: string) {
    // in "dd/mm/yyyy hh:mm" 
    // TODO: validate input
    const [date, time] = str.split(" ");
    const [day, month, year] = date.split("/").map(it => parseInt(it));
    const [hour, minute] = time.split(":").map(it => parseInt(it));
    return new Date(year, month - 1, day, hour, minute);
}

export const FALLBACK_THUMBNAIL = "https://cdn-icons-png.flaticon.com/512/3643/3643327.png";