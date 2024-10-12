import { redirect } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async ({ cookies }) => {
    for (const cookie of cookies.getAll()) {
        cookies.delete(cookie.name, { path: '/' });
    }

    return redirect(307, '/');
}