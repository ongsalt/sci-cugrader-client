
export type APIErrorKind = "network" | "definition-changed" | "unauthorized"

export type ErrorKind = APIErrorKind

export type ErrorInfo = {
    title: string,
    description: string,
    code?: number
}

export const errorMessages: Record<ErrorKind, ErrorInfo> = {
    "definition-changed": {
        title: "API Definitions changed",
        description: "",
        code: 418
    },
    "network": {
        title: "No internet",
        description: "Please check your internet connection and try again",
    },
    "unauthorized": {
        title: "Unauthorized",
        description: "Please login",
    }
}