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
                        </article>
                    )
                })
            }
            </div>  
        </section>
    )
})

export default RandomTeam;