import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Header/Header";
import Search from "./Search/Search";
import PokemonList from "./PokemonList/PokemonList";
import "./PokemonApp.css";
import loadingImage from "../../assets/loading.gif";
import Navigation from "./Navigation/Navigation";
import Footer from "./Footer/Footer";
import { useHistory } from "react-router";

function PokemonApp(props) {
  const pushHistory = useHistory().push;
  const [pokemons, setPokemons] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    props.match.params.id
      ? getPokemons([props.match.params.id])
      : getPokemons();
  }, [props.match.params.id]);

  async function getPokemons(params = [1, 2, 3, 4, 5, 6]) {
    try {
      const Pokedex = require("pokedex-promise-v2");
      const P = new Pokedex({
        protocol: "https",
      });
      const response = await P.getPokemonByName(params);
      const pokemons = response.map((pokemon) => ({
        id: pokemon.id,
        name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
        sprites: pokemon.sprites,
        species: pokemon.species,
        stats: pokemon.stats,
      }));
      setPokemons(pokemons);
      setIsLoaded(true);
    } catch (error) {
      console.error("Error ocurred getting initial pokemons: ", error);
    }
  }

  const handleChange = async (props) => pushHistory(`/pokemon/${props.value}`);

  return (
    <main className="container-fluid">
      <Header />
      <Search handleChange={handleChange} />
      {isLoaded ? (
        <React.Fragment>
          {pokemons.length > 0 && (
            <Navigation
              total={pokemons.length}
              first={pokemons[0].id}
              last={pokemons[pokemons.length - 1].id}
              getPokemons={getPokemons}
              limit={pokemons.length === 1 ? 1 : 6}
            />
          )}
          <PokemonList pokemons={pokemons} />
          <Footer />
        </React.Fragment>
      ) : (
        <img src={loadingImage} alt="Loading" />
      )}
    </main>
  );
}

export default PokemonApp;
