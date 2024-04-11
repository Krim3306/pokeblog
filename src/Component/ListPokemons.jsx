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
            <section className="all-article-list">
                {
                pokemons.map((pokemon) => {
                    return(
                        <section>
                            <article className="article-list" key={pokemon.id}>
                                <p>{pokemon.name}</p>
                                <Link to={`/PokemonDetailsPage/${pokemon.id}`} className="detail-link">Détail Pokemon</Link>
                                {
                                pokemon.apiTypes.map((type) => {
                                    return (
                                        <div>
                                            <p>{type.name}</p>
                                            <Link to={`/PokemonByTypesPage/${type.name}`} className="detail-link">Détail Type</Link>
                                        </div>
                                    )
                                })
                                }
                            </article>
                        </section>
                    )
                })
                }
            </section>
        )
})

export default ListPokemons;