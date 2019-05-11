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
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function getPokemons() {
      try {
        const response = await P.getPokemonByName([
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10
        ]);
        console.log(response);

        if (!pokemons.length) setPokemons(response);
        setIsLoaded(true);
      } catch (error) {
        console.error("Error ocurred getting initial pokemons: ", error);
      }
    }
    getPokemons();
  }, [pokemons]);
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
      {isLoaded ? (
        <PokemonList searchString={searchString} pokemons={pokemons} />
      ) : (
        "loading..."
      )}
    </React.Fragment>
  );
}

export default App;
