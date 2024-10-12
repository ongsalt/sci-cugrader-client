import { getStudentAssignment } from "$lib/api/definitions/data";
import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = async ({ params, parent, fetch }) => {
    const assignmentMeta = (await getStudentAssignment.call({ LID: parseInt(params.assignmentId) }, fetch)).unwrap().unwrap()
    console.log({ assignmentMeta, id: params.assignmentId })
    return {
        assignment: (await parent()).assignments.find(it => it.id.toString() === params.assignmentId)!,
        assignmentMeta
    }
}