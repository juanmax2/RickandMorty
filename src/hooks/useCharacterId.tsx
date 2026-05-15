import { useEffect, useState } from "react";
import { CharacterService } from "../characters/service";
import { LoadAbort } from "../utilities";
import axios from "axios";
import type { Character } from "../characters/models";


export function useCharacterId(id: number) {

    const [dataId, setDataId] = useState<Character | null>(null)
    const [loadingId, setLoadingId] = useState<boolean>(false)
    const [errorId, setErrorId] = useState<Error | null>(null)
    

    useEffect(() => {
        const service = new CharacterService()
        const controller = LoadAbort()

        const fetchDataId = async () => {
            try {
                setLoadingId(true)
                const responseData = await service.getCharacterById(id, { signal: controller.signal })
                setDataId(responseData)

            } catch (err) {
                if (axios.isCancel(err)) return 
                setErrorId(err as Error)
            } finally {
                setLoadingId(false)
            }
        }
        fetchDataId()

        return () => controller.abort()


    }, [id])

    return ( { dataId, loadingId, errorId })
}