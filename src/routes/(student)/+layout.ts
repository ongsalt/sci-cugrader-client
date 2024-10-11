import { getStudentClasses } from "$lib/api/definitions/data";
import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = async ({ fetch }) => {
    const classes = (await getStudentClasses.call({}, fetch)).unwrap()
    console.log(classes)
    return {
        classes
    }
}