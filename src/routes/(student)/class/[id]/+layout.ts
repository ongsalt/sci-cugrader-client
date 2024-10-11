import { getStudentAssignments, getStudentClass } from "$lib/api/definitions/data";
import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = async ({ params, fetch }) => {
    const classMeta = getStudentClass.call({ CSYID: parseInt(params.id) }, fetch).then(it => it.unwrap())
    const assignments = getStudentAssignments.call({ CID: parseInt(params.id) }, fetch).then(it => it.unwrap().unwrap())

    return {
        classMeta: await classMeta,
        assignments: await assignments
    }
}