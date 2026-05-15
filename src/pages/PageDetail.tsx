import { useParams } from "react-router";
import { CharacterDetail } from "../characters/components/CharacterDetail";
import { Header } from "../shared/components/header/Header";
import { Footer } from "../shared/components/footer/Footer";

export function PageDetail(){

    const { id } = useParams<{ id: string }>()
    const characterId = Number(id)
    return(
        <>
            <Header />
            <CharacterDetail id={characterId} />
            <Footer />
        </>
    )
}