import { getStudentRank } from "$lib/api/definitions/data";
import { error } from "@sveltejs/kit";
import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = async ({ params, fetch }) => {
    const ranking = await getStudentRank.call({ CSYID: parseInt(params.id) }, fetch)
    if (ranking.isErr()) {
        return error(418, ranking.error)
    }
    if (ranking.value.isErr()) {
        return error(418, ranking.value.error)
    }
    return {
        ranking: ranking.value.value
    }
};