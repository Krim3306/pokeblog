import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const PokemonDetails = (() => {

    const {pokemonId} = useParams();

    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/pokemon/" + pokemonId)
            .then((response) => {
            return response.json();
        })
        .then((data) => {
            setPokemon(data)
            console.log(data)
        });
    },[]) 

    return (
        <>
            {pokemon && (
                <article>
                    <p>{pokemon.name}</p>
                </article>
            )}
        </>
    )
})

export default PokemonDetails;