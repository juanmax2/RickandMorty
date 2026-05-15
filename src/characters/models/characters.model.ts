
export const Status = {
    Alive: 'Alive',
    Dead: 'Dead',
    unknown: 'unknown'
} as const

export const Gender = {
    Female: 'Female',
    Male: 'Male',
    Genderless: 'Genderless',
    unknown: 'unknown'
} as const

export interface CharOrigin {
    name: string,
    url: string
}
export interface CharLocation {
    name: string,
    url: string
}

export type StatusType = typeof Status[keyof typeof Status]
export type GenderType = typeof Gender[keyof typeof Gender]

export interface Character {
    id: number,
    name: string,
    status: StatusType,
    species: string,
    type: string,
    gender: GenderType,
    origin: CharOrigin,
    location: CharLocation,
    image: string,
    episode: string[],
    url: string,
    created: string,
}

