import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RandomTeam = (() => {

    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        fetch("https://pokebuildapi.fr/api/v1/random/team")
        .then((response) => {
        return response.json();
        })
        .then((data) => {
            setPokemons(data)
            console.log(data)
        });
    },[])
    

    return (
        <section className="all-random-card">
            <h2>Random Team</h2>
            <div className="random-team">
            {
                pokemons.map((pokemon) => {
                    return(
                        <article className="random-card">
                            <h2>{pokemon.name}</h2>
                            <img src={pokemon.image} alt="{pokemon.name}"></img>
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
                        </article>
                    )
                })
            }
            </div>  
        </section>
    )
})

export default RandomTeam;