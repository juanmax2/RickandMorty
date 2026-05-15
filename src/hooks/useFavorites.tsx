import { useEffect, useState } from "react"
import type { Character } from "../characters/models"


export function useFavorites(){
    const [favorites, setFavorites] = useState<Character[]>(() =>{
        const saved = localStorage.getItem("charFavs")
        return saved ? JSON.parse(saved) : []
    })

    useEffect(() => {
        localStorage.setItem("charFavs", JSON.stringify(favorites))
        
    }, [favorites])

    const toggleFavorite = (character: Character) => {
        setFavorites((prev) => {
            const isFav = prev.some((fav) => fav.id === character.id)

            if (isFav) {
                return prev.filter((fav) => fav.id !== character.id)
            } else {
                return [...prev, character]
            }
        })
    }

    const isFavorite = (id: number) => {
        return favorites.some((fav) => fav.id === id)
    }

    return {  favorites, toggleFavorite, isFavorite }
}