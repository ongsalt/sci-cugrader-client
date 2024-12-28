import { getStudentAssignment } from "$lib/api/definitions/data";
import { error } from "@sveltejs/kit";
import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = async ({ params, parent, fetch }) => {
    const assignmentMeta = await getStudentAssignment.call({ LID: parseInt(params.assignmentId) }, fetch)
    if (assignmentMeta.isErr()) {
        error(418, assignmentMeta.error)
    }
    if (assignmentMeta.value.isErr()) {
        error(418, assignmentMeta.value.error)
    }
    return {
        assignment: (await parent()).assignments.find(it => it.id.toString() === params.assignmentId)!,
        meta: {
            assignment: assignmentMeta.value.value
        }
    }
}