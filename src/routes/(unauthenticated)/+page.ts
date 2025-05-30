import { redirect } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ parent }) => {
    const { auth } = await parent();

    if (auth) {
        redirect(307, "/home");
    }
};