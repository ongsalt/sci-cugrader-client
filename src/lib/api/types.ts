export type Question = {
    date: Date,
    id: number,
    maxScore: number,
    score: number
    hideScore: boolean
}

export type Class = {
    code: string,
    name: string,
    id: number,
    instructor: string,
    section: string,
    thumbnail?: string,
}

