import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Search from "../Search/Search";
import PokemonList from "../PokemonList/PokemonList";
import "./PokemonApp.css";

const Pokedex = require("pokedex-promise-v2");

function PokemonApp(props) {
  const [searchString, setSearchString] = useState("");
  const [pokemons, setPokemons] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  async function getPokemons(params = [115, 116]) {
    try {
      const P = new Pokedex();
      const response = await P.getPokemonByName(params);
      const pokemons = response.map(pokemon => ({
        id: pokemon.id,
        name: pokemon.name,
        sprites: pokemon.sprites,
        species: pokemon.species,
        stats: pokemon.stats
      }));
      setPokemons(pokemons);
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

  async function handleSubmit(e) {
    e.preventDefault();
    getPokemons([searchString]);
  }
  return (
    <React.Fragment>
      <Header />
      <Search
        handleChange={setSearchString}
        searchString={searchString}
        handleSubmit={handleSubmit}
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
