import { getStudentClasses } from "$lib/api/definitions/data";
import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = async ({ }) => {
    const res = await getStudentClasses.call({})
    console.log(res.error)
    return {}
}