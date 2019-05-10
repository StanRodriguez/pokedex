import React from "react";
import PokemonCard from "../PokemonCard/PokemonCard";
export default function PokemonList({ pokemons }) {
  return pokemons.map(pokemon => (
    <PokemonCard name={pokemon.name} url={pokemon.url} />
  ));
}
