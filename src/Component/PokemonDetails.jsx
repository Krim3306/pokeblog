import { Link, useParams } from "react-router-dom";
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
        <section className="card">
            {pokemon && (
                <>
                    <h2>{pokemon.name}</h2>
                    <img className="img-type" src={pokemon.image} alt="{pokemon.name}"></img>
                    <>
                        <p>Attaque : {pokemon.stats.attack}</p>
                        <p>Defence : {pokemon.stats.defense}</p>
                        <p>Attaque Spécial : {pokemon.stats.special_attack}</p>
                        <p>Desfence Spécial : {pokemon.stats.special_defense}</p>
                        <p>Vitesse : {pokemon.stats.speed}</p>
                    </>
                    {pokemon.apiTypes.map((pokemonType) => {
                        return (
                            <>
                                <p>{pokemonType.name}</p>
                                <img src={pokemonType.image} alt="{pokemonType.name}"></img>
                                <Link to={`/PokemonByTypesPage/${pokemonType.name}`} >Afficher Pokemon du même type</Link>
                            </>
                        )
                    })}
                </>
            )}
        </section>
    )
})

export default PokemonDetails;