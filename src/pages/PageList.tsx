import { useSearchParams } from "react-router";
import { CharacterForm } from "../characters/components/CharactersForm";
import { CharacterList } from "../characters/components/CharactersList";
import { useCharacters } from "../hooks/useCharacters";
import { useFilters, type Filters } from "../hooks/useFilters";
import { Footer } from "../shared/components/footer/Footer";
import { Header } from "../shared/components/header/Header";
import { Pagination } from "../shared/components/pagination/Pagination";

function PageList() {

    const { filters, setFilters} = useFilters()
    const [searchParams, setSearchParams] = useSearchParams()

    const currentPage = Number(searchParams.get('page')) || 1
  
    const { loading, data, error, totalPages } = useCharacters({
      filters,
      page: currentPage
    })

    const handleFilterChange = (newFilters: Filters) => {
      setFilters(newFilters)

      const params = new URLSearchParams
      if (newFilters.name) params.set("name", newFilters.name)
      if (newFilters.status) params.set("status", newFilters.status)
      if (newFilters.gender) params.set("gender", newFilters.gender)
        
      setSearchParams(params)
    }

    return(
    <>
      <Header />
      <CharacterForm onFilterChange={handleFilterChange} />
      <main>
        {loading && <p>Cargando...</p>}
        {error && <p>{error.message}</p>}
        <CharacterList data={data} />

        {!loading && totalPages > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
          />
        )}
      </main>
      <Footer />

    </>
    )
}

export default PageList