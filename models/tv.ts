export type TV = {
    couldNotFinish: Show[]
    continuing: Show[]
    completed: Show[]
}

export type Show = {
    title: string
    image: string
    rating: number | null
    thoughts: string | null
}
