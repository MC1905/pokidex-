import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import PokeDetail from "./pokemondetails";
import Pokemon from "./pokemon";

function Pokemons({ name, url }) {
  var [pokemonData, setPokemonData] = useState({});
  var [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPokemonData(data);
        setLoading(false);
      });
  }, [url]);

  if (loading) {
    return <div> Aan het laden...</div>;
  }

  return (
    <div>
      <Link to={`/pokemon/${pokemonData.name}`} state={{data: pokemonData}}>
        <h2>{name}</h2>
        <img src={pokemonData.sprites.front_default} alt="" />
      </Link>
    </div>
  );
}

function PokemonLoad() {
  var [pokemons, setPokemons] = useState({});
  var [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div> Aan het laden...</div>;
  }

  return (
    <div className="App">
      {pokemons.results.map((pokemon) => {
        return <Pokemons key={pokemon.name} name={pokemon.name} url={pokemon.url} />;
      })}
    </div>
  );
}

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<PokemonLoad />} />
//       <Route path="/pokemonload/*" element={<PokeDetail />} />
//     </Routes>
//   );
// }

export default PokemonLoad;
