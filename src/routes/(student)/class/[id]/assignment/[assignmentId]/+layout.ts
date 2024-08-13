import { getStudentAssignment } from "$lib/api/definitions/data";
import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = async ({ params, parent }) => {
    const assignmentMeta = (await getStudentAssignment.call({ LID: parseInt(params.assignmentId) })).unwrap().unwrap()
    // console.log({ assignment })
    return {
        assignment: (await parent()).assignments.find(it => it.id.toString() === params.id)!,
        assignmentMeta
    }
}