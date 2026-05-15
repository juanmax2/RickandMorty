import { Link } from 'react-router'
import './Pagination.css'

interface Props {
    currentPage: number
    totalPages: number
}

export function Pagination({currentPage, totalPages}: Props) {


    const buildPageUrl = (page: number) => {
        const params = new URLSearchParams(window.location.search)
        params.set('page', page.toString())
        return `?${params.toString()}`
    }

    return (
        <div className="paginationContainer">
            {currentPage > 1 ? 
                (<Link
                to={buildPageUrl(currentPage - 1)}
                >
                    <img className="clicks" src={`${import.meta.env.BASE_URL}/prev.svg`} alt="" />
                </Link> ) : (
                    <img className="clicks disabled" src={`${import.meta.env.BASE_URL}/prev.svg`} alt="" />
                )  
        }

            <p>{currentPage}</p>
            {currentPage < totalPages ? (
                <Link
                to={buildPageUrl(currentPage + 1)}
                >
                    <img className="clicks" src={`${import.meta.env.BASE_URL}/next.svg`} alt="" />
                </Link>
            ) : (
                <img className="clicks disabled" src={`${import.meta.env.BASE_URL}/next.svg`} alt="" />
            )}

        </div>
    )
}