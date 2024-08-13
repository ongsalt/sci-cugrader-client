import { getStudentAssignment } from "$lib/api/definitions/data";
import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = async ({ params }) => {
    const assignment = (await getStudentAssignment.call({ LID: parseInt(params.assignmentId) }))
    console.log({ assignment })
    return { assignment }
}