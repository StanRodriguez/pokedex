import React from "react";
export default function PokemonCard(props) {
  return (
    <div className="pokemon-card">
      <h1>name: {props.name}</h1>

      <h1>url: {props.url}</h1>
    </div>
  );
}
