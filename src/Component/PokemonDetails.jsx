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
                    <h3>{pokemon.name}</h3>
                    <img className="img-type" src={pokemon.image} alt="{pokemon.name}"></img>
                    <div>
                        <p>Attaque : {pokemon.stats.attack}</p>
                        <p>Defence : {pokemon.stats.defense}</p>
                        <p>Attaque Spécial : {pokemon.stats.special_attack}</p>
                        <p>Desfence Spécial : {pokemon.stats.special_defense}</p>
                        <p>Vitesse : {pokemon.stats.speed}</p>
                    </div>
                    {pokemon.apiTypes.map((pokemonType) => {
                        return (
                            <div key={pokemonType.id}>
                                <p>{pokemonType.name}</p>
                                <img className="img-pokemon" src={pokemonType.image} alt="{pokemonType.name}"></img>
                            </div>
                        )
                    })}
                </article>
            )}
        </>
    )
})

export default PokemonDetails;