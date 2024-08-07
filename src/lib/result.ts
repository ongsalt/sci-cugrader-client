interface _Result<T = void, E = string> {
    ok: boolean
    value?: T
    error?: E

    map<U>(mapper: (value: T) => U): Result<U, E>
    mapError<F>(mapper: (error: E) => F): Result<T, F>
}

export class Ok<T, E = unknown> implements _Result<T, E> {
    public ok = true
    constructor(
        public value: T
    ) { }

    map<U>(mapper: (value: T) => U): Result<U, E> {
        return new Ok(mapper(this.value))
    }

    mapError<F>(mapper: (error: E) => F): Result<T, F> {
        return new Ok(this.value)
    }
}

export class Err<E, T = unknown> implements _Result<T, E> {
    public ok = false
    constructor(
        public error: E
    ) { }

    map<U>(mapper: (value: T) => U): Result<U, E> {
        return new Err(this.error)
    }

    mapError<F>(mapper: (error: E) => F): Result<T, F> {
        return new Err(mapper(this.error))
    }
}


export type Result<T = void, E = string> = Ok<T, E> | Err<E, T>

export function ok<T, E = unknown>(value: T): Ok<T, E> {
    return new Ok(value)
}

export function err<E, T>(error: E): Err<E, T> {
    return new Err(error)
}

export function tryWithResult<T, E, Thrown = unknown>(fn: () => T, errorHandler: (error: Thrown) => E): Result<T, E> {
    try {
        return ok(fn())
    } catch (e) {
        return err(errorHandler(e as Thrown))
    }
}
