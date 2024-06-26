import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const PokemonByTypes = (() => {

    const {type} = useParams();

    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0)
        fetch("https://pokebuildapi.fr/api/v1/pokemon/type/" + type)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setPokemons(data)
            console.log(data)
        });
    },[type]) 

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
                                pokemon.apiTypes.map((type) => {
                                    return (
                                        <>
                                            <p>{type.name}</p>
                                            <Link to={`/PokemonByTypesPage/${type.name}`} className="detail-link">Afficher Pokemon du même type</Link>
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

export default PokemonByTypes;