import { Link } from "react-router";
import { useFavoriteContext } from "../context/characterContext";
import type { Character } from "../models";

interface Props {
    character: Character
}

export function CharacterCard({character: char}: Props) {

    const { toggleFavorite, isFavorite } = useFavoriteContext()

    const isFav = isFavorite(char.id)

    const handleToggleFavorite = (event: React.MouseEvent) => {
        event.preventDefault()
        event.stopPropagation()
        toggleFavorite(char)
    }

    return (
        <li className="charContainer" key={char.id}>
            <Link to={`/character/${char.id}`}>
                <h3 className="charTitle">{char.name}</h3>
                <img className="charIMG" src={char.image} alt="" />
                <button

                    className={`${isFav ? "charFav" : ""} btnFavorite`}
                    onClick={handleToggleFavorite}
                >
                    <img className="starFavorite" src={isFav ? "/favorite.svg" : "/noFavorite.svg"} alt="" />
            </button>
            </Link>
            
        </li>
    )
}