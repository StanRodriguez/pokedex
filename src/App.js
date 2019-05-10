import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
// const Pokedex = require("pokedex-promise-v2");
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./components/Search/Search";
import PokemonList from "./components/PokemonList/PokemonList";
var Pokedex = require("pokedex-promise-v2");
var P = new Pokedex();

function App(props) {
  const [searchString, changeSearchString] = useState("");
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {});
  async function onSubmit(e) {
    e.preventDefault();
    try {
      const response = await P.getPokemonByName(searchString);
      console.log(response);
    } catch (error) {
      console.log("There was an ERROR: ", error);
    }
  }
  return (
    <React.Fragment>
      <Header />
      <Search
        onChange={changeSearchString}
        searchString={searchString}
        onSubmit={onSubmit}
      />
      <PokemonList searchString={searchString} />
    </React.Fragment>
  );
}

export default App;
