import React from "react";
export default function PokemonCard({ name, url }) {
  //   console.log(props);
  return (
    <div className="pokemon-card">
      <h1>name: {name}</h1>

      <h1>url: {url} </h1>
    </div>
  );
}
