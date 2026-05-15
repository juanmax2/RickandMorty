import { useFavoriteContext } from "../context/characterContext";
import { CharacterCard } from "./CharacterCard";
import './Characters.css'

export function CharacterFavorites(){
    const { favorites } = useFavoriteContext()
    if (favorites.length < 1){
        return <p>No hay favoritos...</p>
    }
    return(
        <ul className="charContainer">
            {
                favorites.map((char) => (
                    <CharacterCard character={char} />
                ))
            }
        </ul>
    )
}