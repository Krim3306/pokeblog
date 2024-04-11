import { Link } from "react-router-dom";

const Header = (() => {
    return (
        <header>
            <h1>Blog Pokémon</h1>
            <img className="logo" src="https://www.pngall.com/wp-content/uploads/13/Pokemon-Logo-PNG-Pic.png" alt="Logo"></img>
            <ul>
                <li>
                    <Link to='/'>HomePage</Link>
                </li>
                <li>
                    <Link to='/PokemonDetailsPage/pokemonId'>PokemonDetailsPage</Link>
                </li>
            </ul>
        </header>
        
    )
})

export default Header;