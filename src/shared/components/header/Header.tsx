import { Link } from 'react-router'
import './Header.css'

export function Header() {
    return (
        <header>
            <nav className="navMenu">
                <Link to="/"><p>List</p></Link>
                <Link to="/favorites">Favorites</Link>
            </nav>
            <div className="titleContainer">
                <img className="title" src={`${import.meta.env.BASE_URL}/title.png`} alt="" />

                <img className="titleShadow" src={`${import.meta.env.BASE_URL}/title.png`} alt="" />
            </div>
        </header>
    )
}