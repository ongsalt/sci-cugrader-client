export type Assignment = {
    due: Date,
    publish: Date,
    id: number, // LID
    lab: string, // lab
    name: string,
    isLate: boolean,
    isTurnedIn: boolean,
    hideScore: boolean,
    maxScore: number,
    score: number,
}

export type AssignmentMeta = {
    info: {
        due: Date,
        publish: Date,
        isLate: boolean,
        isLocked: boolean,
        name: string,
        lab: string,
        attachments: {
            name: string,
            id: number
        }[]
    },
    questions: Question[]
}

export type Question = {
    id: number,
    date: Date,
    maxScore: number,
    score: number,
    hideScore: boolean,
    submission?: {
        date: Date,
        filename: string,
        isLate: boolean,
        originalName: string,
        id: number
    },
}

export type Ranking = {
    rank: number,
    studentCount: number
    score: number,
    maxScore: number,
    stats: number[] // size:10
}

// Return by getAll
export type Class = {
    code: string,
    name: string,
    id: number,
    instructor: string,
    section: string,
    thumbnail?: string,
}

// Return by get specific
export type ClassMeta = {
    archive: boolean,
    code: string,// ClassID
    name: string,
    semaster: string, // ClassYear
    instructor: string,
    thumbnail?: string,
}
