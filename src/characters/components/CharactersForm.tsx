import { useId, useRef } from "react"
import type { Filters } from "../../hooks/useFilters"
import { useSearchParams } from "react-router"



interface Props {
    onFilterChange: (newFilters: Filters) => void
}
export function CharacterForm({onFilterChange}: Props){

    const nameId = useId()
    const statusId = useId()
    const genderId = useId()

    const timeoutRef = useRef<number | null>(null)

    const inputNameRef = useRef<HTMLInputElement>(null)

    type CustomEvent = React.ChangeEvent<HTMLFormElement>

    const handleChange = (event: CustomEvent) => {

        const form = event.currentTarget
        const formData = new FormData(form)

        const currentFilters: Filters = {
            name: formData.get("name") as string || "",
            status: formData.get("status") as string || "",
            gender: formData.get("gender") as string || ""
        }
        
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }

        const triggeredBy = (event.target as HTMLElement).id

        if (triggeredBy === nameId){
            timeoutRef.current = window.setTimeout(() => {
                onFilterChange(currentFilters)
            }, 500)
        }else {
            onFilterChange(currentFilters)
        }

    }

    const handleCleanner = (event: React.MouseEvent) => {
        event.preventDefault()

        if (inputNameRef.current) {
            inputNameRef.current.value = ""
        }
        const form = (inputNameRef.current as HTMLInputElement).form

        if (form) {
            const formData = new FormData(form)
            onFilterChange({
                name: "",
                status: formData.get("status") as string || "",
                gender: formData.get("gender") as string || ""
            })

        }


    }

    const [searchParams] = useSearchParams()

    return (
        <form onChange={handleChange}>
            <div className="searchBar">
                <input ref={inputNameRef} defaultValue={searchParams.get('name') || ""} type="text" placeholder="Rick..." name="name" id={nameId}/>
                <button onClick={handleCleanner} className="btnCleaner">X</button>
            </div>

            <div className="selectsContainer">
                <select defaultValue={searchParams.get('status') || ""} name="status" id={statusId}>
                    <option value="">Status</option>
                    <option value="alive">Alive</option>
                    <option value="dead">Dead</option>
                    <option value="unknown">Unknown</option>
                </select>

                <select defaultValue={searchParams.get('gender') || ""} name="gender" id={genderId}>
                    <option value="">Gender</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="genderless">Genderless</option>
                    <option value="unknown">Unknown</option>
                </select>
            </div>
        </form>
    )
}