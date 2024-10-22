import { getStudentAssignments, getStudentClass } from "$lib/api/definitions/data";
import { error } from "@sveltejs/kit";
import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = async ({ params, fetch }) => {
    const [classMeta, assignments] = await Promise.all([
        getStudentClass.call({ CSYID: parseInt(params.id) }, fetch),
        getStudentAssignments.call({ CID: parseInt(params.id) }, fetch)
    ])

    if (classMeta.isErr()) {
        error(500, classMeta.error)
    }

    if (assignments.isErr()) {
        error(500, assignments.error)
    }
    
    if (assignments.value.isErr()) {
        error(500, assignments.value.error)
    }

    return {
        classMeta: classMeta.value,
        assignments: assignments.value.value
    }
}