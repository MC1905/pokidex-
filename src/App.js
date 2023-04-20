// import logo from "./logo.svg";
import "./App.css";
// import { useEffect, useState } from "react";
import { Routes, Route, Link} from "react-router-dom";
// import PokemonOverview from "pokemondetail"
// import PokeDetail from "./pokemondetails";
// import Pokemon from "./pokemon";
import PokemonLoad from "./pokemonload";





function App() {
 return (
  <div className='App'>
  <nav>
    {' '}
    <ul>
      {' '}
      <li>
        <Link to='/'>home</Link>{' '}
      </li>{' '}
      <li>
        <Link to='/pokemonload'>pokemonload</Link>{' '}
      </li>{' '}
    </ul>{' '}
  </nav>
  <Routes>
    <Route exact path='/pokemonload' element={<PokemonLoad />} />
  </Routes>

</div>
  
 )
  



}

export default App;