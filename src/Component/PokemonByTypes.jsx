import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PokemonByTypes = (() => {

    const {type} = useParams();

    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        fetch("https://pokebuildapi.fr/api/v1/pokemon/type/" + type)
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
            {
            pokemon.map((pokemon) => {
                return (
                    <p>{pokemon.name}</p>
                )
            })
            }
        </>
    )
})

export default PokemonByTypes;