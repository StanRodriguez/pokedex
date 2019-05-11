import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Search from "../Search/Search";
import PokemonList from "../PokemonList/PokemonList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PokemonApp.css";

const Pokedex = require("pokedex-promise-v2");

function PokemonApp(props) {
  const [searchString, changeSearchString] = useState("");
  const [pokemons, setPokemons] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  async function getPokemons(params = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
    try {
      const P = new Pokedex();
      const response = await P.getPokemonByName(params);
      setPokemons(response);
      setIsLoaded(true);
    } catch (error) {
      console.error("Error ocurred getting initial pokemons: ", error);
    }
  }

  useEffect(() => {
    props.match.params.id
      ? getPokemons([props.match.params.id])
      : getPokemons();
  }, [props.match.params.id]);

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const P = new Pokedex();
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

export default PokemonApp;
