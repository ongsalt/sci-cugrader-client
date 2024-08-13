import { getStudentClasses } from "$lib/api/definitions/data";
import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = async ({ }) => {
    const classes = (await getStudentClasses.call({})).unwrap()
    console.log(classes)
    return {
        classes
    }
}