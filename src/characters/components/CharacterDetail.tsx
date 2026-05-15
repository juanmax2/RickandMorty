import { Link } from "react-router"
import { useCharacterId } from "../../hooks/useCharacterId"

interface Props {
    id: number
}

export function CharacterDetail({id}: Props) {

    const {dataId: character, loadingId, errorId} = useCharacterId(id)
    if (loadingId) return <p>Cargando personaje...</p>
    if (errorId) return <p>{errorId.message}</p>
    if (!character) return null
    return(

        <section className="characterDetail">
            <h2>{character.name}</h2>
            <img src={character.image} alt="" />
            
            <div className="charInfo">
                <p>Status: {character.status}</p>
                <p>Species: {character.species}</p>
                <p>Gender: {character.gender}</p>
                <p>Location: {character.location.name}</p>
            </div>
            
            <h4>Capitulos</h4>

            <ul>
                {character.episode.map(
                    (epi) => (
                        <li className="chapter" key={epi}>
                            {epi}
                        </li>
                    )
                )}
            </ul>
            
            <Link className="back" to={'/'}>Volver atrás</Link>
        </section>

    )


}