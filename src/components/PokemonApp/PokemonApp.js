import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Search from "../Search/Search";
import PokemonList from "../PokemonList/PokemonList";
import "./PokemonApp.css";
import Pagination from "../Navigation/Navigation";

const Pokedex = require("pokedex-promise-v2");

function PokemonApp(props) {
  const [searchString, setSearchString] = useState("");
  const [pokemons, setPokemons] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    props.match.params.id
      ? getPokemons([props.match.params.id])
      : getPokemons();
  }, [props.match.params.id]);

  async function getPokemons(params = [1, 2, 3, 4, 5, 6]) {
    try {
      const P = new Pokedex();
      const response = await P.getPokemonByName(params);
      const pokemons = response.map(pokemon => ({
        id: pokemon.id,
        name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
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

  async function handleSubmit(e) {
    e.preventDefault();
    if (searchString) getPokemons([searchString.toLocaleLowerCase()]);
  }

  return (
    <main className="container-fluid">
      <Header />
      <Search
        handleChange={setSearchString}
        searchString={searchString}
        handleSubmit={handleSubmit}
      />
      {isLoaded ? (
        <React.Fragment>
          {pokemons.length > 1 && (
            <Pagination
              total={pokemons.length}
              first={pokemons[0].id}
              last={pokemons[pokemons.length - 1].id}
              getPokemons={getPokemons}
            />
          )}
          <PokemonList searchString={searchString} pokemons={pokemons} />
        </React.Fragment>
      ) : (
        "loading..."
      )}
    </main>
  );
}

export default PokemonApp;
