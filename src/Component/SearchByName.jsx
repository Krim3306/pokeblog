import { useState } from "react";

const SearchByName = (() => {

    const [searchedPokemon, setSearchedPokemon] = useState(null);

    const submitPokemon = (event) => {
        event.preventDefault()
        const targetedPokemon = event.target.searchedPokemon.value
        console.log(targetedPokemon);

        fetch("https://pokebuildapi.fr/api/v1/pokemon/" + targetedPokemon)
        .then((response) => {

        if (response.status === 500) {
            setSearchedPokemon(null)
        } else {
             return response.json();
        }
        })
        .then((data) => {
            setSearchedPokemon(data)
            console.log(data)
        });
    }

    return (
        <>
            <form onSubmit={submitPokemon}>
                <label> 
                    <p>Entrer le nom du Pokémon recherché : </p> 
                    <input type="text" name="searchedPokemon"></input>
                </label>
                <input type="submit"></input>
            </form>
            {
            !searchedPokemon ? (
                <p>Ce pokémon n'existe pas</p>
            ) : (
                <div>
                    <p>Ce pokémon existe</p>
                    <article className="sous-container-trois-starter">
                        <h3>{searchedPokemon.name}</h3>
                        <img className="img-type" src={searchedPokemon.image} alt="{searchedPokemon.name}"></img>
                        <div>
                            <p>Attaque : {searchedPokemon.stats.attack}</p>
                            <p>Defence : {searchedPokemon.stats.defense}</p>
                            <p>Attaque Spécial : {searchedPokemon.stats.special_attack}</p>
                            <p>Desfence Spécial : {searchedPokemon.stats.special_defense}</p>
                            <p>Vitesse : {searchedPokemon.stats.speed}</p>
                        </div>
                        {searchedPokemon.apiTypes.map((pokemonType) => {
                            return (
                                <div key={pokemonType.id}>
                                    <p>{pokemonType.name}</p>
                                    <img className="img-pokemon" src={pokemonType.image} alt="{pokemonType.name}"></img>
                                </div>
                            )
                        })}
                    </article>
                </div>
            )
            }
        </>
    )
})

export default SearchByName;