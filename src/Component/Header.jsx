import { Link } from "react-router-dom";

const Header = (() => {
    return (
        <>
            <h1>Blog Pokémon</h1>
            <ul>
                <li>
                    <Link to='/'>HomePage</Link>
                </li>
                <li>
                    <Link to='/PokemonDetailsPage/pokemonId'>PokemonDetailsPage</Link>
                </li>
            </ul>
        </>
        
    )
})

export default Header;