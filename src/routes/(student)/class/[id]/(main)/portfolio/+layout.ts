import { getStudentRank } from "$lib/api/definitions/data";
import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = async ({ params, fetch }) => {
    const ranking = (await getStudentRank.call({ CSYID: parseInt(params.id) }, fetch)).unwrap().unwrap()
    return {
        ranking
    }
};