import { createContext, useContext, type ReactNode } from "react";
import type { Character } from "../models";
import { useFavorites } from "../../hooks/useFavorites";

interface FavoritesContextType {
    favorites: Character[]
    toggleFavorite: (char: Character) => void
    isFavorite: (id: number) => boolean
}

interface ProviderProps {
    children: ReactNode
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined)

export function FavoritesProvider({children}: ProviderProps){

    const { favorites, toggleFavorite, isFavorite } = useFavorites()


    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
            {children}
        </FavoritesContext.Provider>
    )
}

export const useFavoriteContext = () => {
    const context = useContext(FavoritesContext)
    if (!context) throw new Error("useFavoriteContext debe usarse dentro de el contexto")
    return context
}