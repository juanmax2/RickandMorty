import { CharacterFavorites } from '../characters/components/CharacterFavorites.tsx'
import { Footer } from '../shared/components/footer/Footer'
import { Header } from '../shared/components/header/Header.tsx'

export function PageFavorites() {
    
    return (
        <>
            <Header />
            <CharacterFavorites />
            <Footer />
        </>
    )
}