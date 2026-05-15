import type { Character } from "../models"
import './Characters.css'
import { CharacterCard } from "./CharacterCard"


interface Props {
    data: Character[]
}

export function CharacterList({data}: Props) {

    return (
        <div>
            <ul className="charContainer">
            {data.map((char) => {
            return(
                <CharacterCard character={char} key={char.id}/>
            )
            })}
            </ul>
        </div>
    )
}