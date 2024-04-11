import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListPokemons = (() => {

    const [pokemons, setPokemons] = useState([]);

        useEffect(() => {
            fetch("https://pokebuildapi.fr/api/v1/pokemon")
                .then((response) => {
                return response.json();
            })
            .then((data) => {
                setPokemons(data)
                console.log(data)
            });
        },[]) 

        return (
            <>
                {
                pokemons.map((pokemon) => {
                    return(
                        <article key={pokemon.id}>
                            <p>{pokemon.name}</p>
                            <Link to={`/PokemonDetailsPage/${pokemon.id}`}>Voir le détail du pokemon</Link>
                        </article>
                    )
                })
                }
            </>
        )
})

export default ListPokemons;