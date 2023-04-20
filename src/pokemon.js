import React, { useState, useEffect } from "react";

function Pokemon() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((data) => setPokemonList(data.results));
  }, []);

  const getPokemonData = async (pokemon) => {
    const response = await fetch(pokemon.url);
    const data = await response.json();
    return data;
  };

  return (
    <div>
      <h1>Pokemon List</h1>
      <ul>
        {pokemonList.map(async (pokemon) => {
          const data = await getPokemonData(pokemon);
          const spriteUrl = data.sprites.front_default;
          return (
            
            <li key={pokemon.name}>
              <img src={spriteUrl} alt={pokemon.name} />
              {pokemon.name}
            </li>
            
          );
        })}
      </ul>
    </div>
  );
}

export default Pokemon;
