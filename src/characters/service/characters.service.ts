import  axios from 'axios'
import type { Character } from '../models'

interface APIResponse {
    info: {
        count: number
        pages: number
        next: string | null
        prev: string | null
    }
    results: Character[]
}

export interface Params {
    name?: string
    status?: string
    gender?: string
    page?: number
}
export const emptyParams: Params = {}

interface Props {
    params?: Params
    signal?: AbortSignal
}

export class CharacterService {
    private BASE_URL = "https://rickandmortyapi.com/api/character"
    
    async getCharacters({ params = {}, signal }: Props){
        const { name, status, gender, page = 1 } = params
        const response = await  axios.get<APIResponse>(`${this.BASE_URL}`, { 
            params: {name, status, gender, page}, 
            signal 
        })
        return response.data
    }

    async getCharacterById(id: number, { signal }: Pick<Props, 'signal'>) {
        const { data } = await axios.get<Character>
        (`${this.BASE_URL}/${id}` ,{ signal})
        return data
    }
}