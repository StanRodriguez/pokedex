import React from "react";
import PokemonCard from "../PokemonCard/PokemonCard";
import "./PokemonList.css";
export default function PokemonList({ pokemons }) {
  return (
    <div className="pokemon-list">
      {pokemons.map(pokemon => (
        <PokemonCard key={pokemon.id} pokemon={{ ...pokemon }} />
      ))}
    </div>
  );
}
