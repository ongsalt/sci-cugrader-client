import { getStudentClasses } from "$lib/api/definitions/data";
import { error } from "@sveltejs/kit";
import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = async ({ parent, fetch }) => {
    const auth = await parent()
    if (auth === null) {
        return error(418, {
            kind: "unauthorized"
        })
    }

    const classes = await getStudentClasses.call({}, fetch)
    if (classes.isErr()) {
        return error(418, {
            kind: classes.error,
        })
    }

    return {
        auth,
        classes: classes.value
    }
}