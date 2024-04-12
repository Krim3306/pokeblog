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
                        <section className="article-list">
                            <h2>{pokemon.name}</h2>
                                <Link to={`/PokemonDetailsPage/${pokemon.id}`} className="detail-link">Afficher Détail</Link>
                            <>
                                {
                                pokemon.apiTypes.map((type) => {
                                    return (
                                        <>
                                            <p>Pokemon de type : {type.name}</p>
                                            <Link to={`/PokemonByTypesPage/${type.name}`} className="detail-link">Afficher Pokemon du même type</Link>
                                        </>
                                    )
                                })
                                }
                                {
                                pokemon.apiTypes.map((type) => {
                                    return (
                                        <>
                                            <p>Pokemon résistant au type : {type.name}</p>
                                            <Link to={`/PokemonResistanceByTypePage/${type.name}`} className="detail-link">Afficher Resistance</Link>
                                        </>
                                    )
                                })
                                }
                            </>
                        </section>
                    )
                })
                }
            </section>
        )
})

export default ListPokemons;