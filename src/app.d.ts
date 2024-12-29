// See https://kit.svelte.dev/docs/types#app

import type { ErrorKind } from "$lib/api/error";

// for information about these interfaces
declare global {
	namespace App {
		interface Error {
			readonly kind: ErrorKind,
			readonly message?: string
		}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
