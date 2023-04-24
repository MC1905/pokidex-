import React, { useState, useEffect } from "react";
import "./App.css";
import { useLocation } from "react-router-dom";

function PokeDetail() {
  const [pokemonDetail, setPokemonDetail] = useState([]);

  let { state } = useLocation();

 


  return (
    <div className="pokemoninfo">
      {JSON.stringify()}
      <div className="pokedex">
        <img
          src={state.data.sprites.front_default}
          alt=""
          width="60px"
          height="60px"
        />
        <h2>POKEDEX</h2>
      </div>
      <div>
        
      </div>
      <div className="details dib">
        {state.data.name}
      </div>
    </div>
  );
}

export default PokeDetail;
