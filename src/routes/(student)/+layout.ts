import { getStudentClasses } from "$lib/api/definitions/data";
import { error } from "@sveltejs/kit";
import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = async ({ parent, fetch }) => {
    const { auth } = await parent()
    if (auth === null) {
        return error(401, "Unauthorized")
    }
    const classes = await getStudentClasses.call({}, fetch)
    if (classes.isErr()) {
        return error(418, classes.error)
    }
    console.log(classes)
    return {
        classes: classes.value
    }
}