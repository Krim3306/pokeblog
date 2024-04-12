import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const PokemonResistanceByType = (() => {

    const {typeResistance} = useParams();

    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0)
        fetch("https://pokebuildapi.fr/api/v1/pokemon/type/resistance/" + typeResistance)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setPokemons(data)
            console.log(data)
        });
    },[typeResistance]) 

    return (
<section className="all-type-list">
            {
            pokemons.map((pokemon) => {
                return (
                    <section className="type-list">
                            <>
                                <h2>{pokemon.name}</h2>
                                <Link to={`/PokemonDetailsPage/${pokemon.id}`} className="detail-link">Afficher Détail</Link>
                                {
                                pokemon.apiTypes.map((typeResistance) => {
                                    return (
                                        <>
                                            <p>{typeResistance.name}</p>
                                            <Link to={`/PokemonResistanceByTypePage/${typeResistance.name}`} className="detail-link">Afficher résistant à ce type</Link>
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

export default PokemonResistanceByType;