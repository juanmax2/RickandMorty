import { useEffect, useState } from "react";
import type { Character } from "../characters/models";
import { LoadAbort } from "../utilities";
import { CharacterService, type Params } from "../characters/service";
import axios from "axios";
import { type Filters } from './useFilters.tsx'



type CustomError = Error | null

interface Props {
    filters: Filters
    page: number
}

export function useCharacters({filters, page}: Props ) {

    const [data, setData] = useState<Character[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<CustomError>(null)

    //paginacion

    const [totalPages, setTotalPages] = useState(0)

    const { name, status, gender } = filters

    useEffect(() => {
        const controller = LoadAbort()
        const service = new CharacterService()

        const fetchData = async () => {
            try {
                setLoading(true)
                setError(null)

                const apiParams: Params = { page }
                if (name) apiParams.name = name
                if(status) apiParams.status = status
                if(gender) apiParams.gender = gender

                const data = await service.getCharacters({
                    params: { ...apiParams },
                    signal: controller.signal} )
                setData(data.results)
                setTotalPages(data.info.pages)
            } catch (err){
                if (axios.isCancel(err)) return
                setData([])
                setError(err as CustomError)
            } finally {
                setLoading(false)
            }
        } 

        fetchData()

        return () => controller.abort()
    }, [name, status, gender, page])



    return { loading, data, error, page, totalPages }
}