import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { PUBLIC_BASE_API_URL } from "$env/static/public";

// This is probably the most stupid proxy ever 
const makeHandler = (method: "GET" | "POST"): RequestHandler => async ({ params, request, cookies, url }) => {
    const { headers } = request
    const csrfToken = cookies.get("csrf_token") ?? ""

    // I hate cors
    headers.delete("host")
    // headers.set("sec-fetch-dest", "empty")
    // headers.set("sec-fetch-mode", "cors")
    // headers.set("sec-fetch-site", "same-origin")
    headers.set("x-csrf-token", csrfToken)
    // headers.set("referrer-policy", "strict-origin-when-cross-origin")
    headers.delete("sec-fetch-mode")
    headers.delete("sec-fetch-site")
    headers.delete("sec-fetch-dest")
    // headers.set("referer", "https://sci.cugrader.com")

    const target = new URL(params.path, PUBLIC_BASE_API_URL)
    url.searchParams.forEach((value, key) => {
        target.searchParams.append(key, value)
    })

    return await fetch(target, {
        headers,
        body: method === "GET" ? null : await request.text(),
        method
    })
}

export const GET = makeHandler("GET")
export const POST = makeHandler("POST") 