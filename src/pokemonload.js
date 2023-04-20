

// import logo from "./logo.svg";
import "./App.css";

import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
// import PokemonOverview from "pokemondetail"
import PokeDetail from "./pokemondetails";
import Pokemon from "./pokemon";
// import PokemonDetails from "pokemondetails"



function Pokemons({name, url}) {
  var [pokemons, SetPokemons] = useState({});
  var [loading, SetLoading] = useState({});

  useEffect(() => {
    fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
      SetPokemons(data)
      SetLoading(false)});
  }, );

  if (loading) {
    return (
      <div> Aan het laden...</div>
    );
  }

  return (
    <div>
      <h2>{name}</h2>
      <img src={pokemons.sprites.front_default} alt="" />
    </div>
  )
}

function PokemonLoad() {
  var [pokemons, SetPokemons] = useState({});
  var [loading, SetLoading] = useState({});

  
  <Routes>
    <Route path="/" element={    <Pokemon />} />
    <Route path="/about" element={<div>About pokedex!</div>} />
    <Route path="/pokemon/:id" element={<PokeDetail />} />
  </Routes>
  


  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
    .then((Response) => Response.json())
    .then((data) => {
      SetPokemons(data)
      SetLoading(false)});
  }, []);

  if (loading) {
    return (
      <div> Aan het laden...</div>
    );
  }

  return (
    <div className="App">
        {pokemons.results.map(pokemon => {
          return(
            <Pokemons name={pokemon.name} url={pokemon.url} />
          );
        })}
    </div>
  );
}

export default PokemonLoad;