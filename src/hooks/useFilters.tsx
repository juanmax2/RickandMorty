import { useState } from "react";
import { useSearchParams } from "react-router";

export interface Filters{
    name: string
    status: string
    gender: string
}

const emptyFilters: Filters = {
    name: "",
    status: "",
    gender: ""
}

export function useFilters() {
    const [searchParams] = useSearchParams()
    const [filters, setFilters] = useState<Filters>({
        name: searchParams.get('name') || emptyFilters.name,
        status: searchParams.get('status') || emptyFilters.status,
        gender: searchParams.get('gender') || emptyFilters.gender
    })

    return { filters, setFilters }
}