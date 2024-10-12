import { getStudentClasses } from "$lib/api/definitions/data";
import { error } from "@sveltejs/kit";
import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = async ({ parent, fetch }) => {
    const { auth } = await parent()
    if (auth === null) {
        return error(401, "Unauthorized")
    }
    const classes = (await getStudentClasses.call({}, fetch)).unwrap()
    console.log(classes)
    return {
        classes
    }
}