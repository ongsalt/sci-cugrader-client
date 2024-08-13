import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

const handler: RequestHandler = ({ params, request }) => {
    const headers = request.headers
    const body = request.text()
    console.log({ headers, body, params })
    return json("")
}

export const GET = handler 
export const POST = handler 