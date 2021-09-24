import React from "react";
import PokemonCard from "./PokemonCard/PokemonCard";
import "./PokemonList.css";
export default function PokemonList({ pokemons }) {
  return (
    <React.Fragment>
      <div className="pokemon-list">
        {pokemons.map((pokemon, i, pokemons) => (
          <PokemonCard
            total={pokemons.length}
            key={pokemon.id}
            pokemon={{ ...pokemon }}
          />
        ))}
      </div>
    </React.Fragment>
  );
}
