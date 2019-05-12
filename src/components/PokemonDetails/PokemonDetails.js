import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Slideshow from "../Slideshow/Slideshow";
const Pokedex = require("pokedex-promise-v2");

export default function PokemonDetails({ buttonLabel, pokemon }) {
  const { name, sprites, species } = pokemon;

  const [modal, setModal] = useState(false);
  const [details, setDetails] = useState({});
  function getDescription(descriptions, language) {
    return descriptions.filter(
      description => description.language.name === language
    )[0].flavor_text;
  }
  function getEvolutionChain(evolves_to, cleanedChain = [], count = 1) {
    if (!evolves_to) return cleanedChain;
    else {
      cleanedChain.push({
        name: evolves_to.species.name,
        url: "/" + evolves_to.species.url[evolves_to.species.url.length - 2]
      });
      return getEvolutionChain(
        evolves_to.evolves_to[0],
        cleanedChain,
        count + 1
      );
    }
  }
  async function getPokemonDetails() {
    const P = new Pokedex();
    try {
      const pokeSpecies = await P.resource([species.url]);

      const pokeEvolutionChain = await P.resource([
        pokeSpecies[0].evolution_chain.url
      ]);
      // console.log(pokeSpecies, pokeEvolutionChain[0].chain);
      console.log(getEvolutionChain(pokeEvolutionChain[0].chain));

      setDetails({
        description: getDescription(pokeSpecies[0].flavor_text_entries, "en"),
        evolutionChain: getEvolutionChain(pokeEvolutionChain[0].chain)
      });
      setModal(!modal);
    } catch (error) {
      console.error("An error has ocurred getting pokemon details: ", error);
    }
  }
  return (
    <div>
      <Button color="danger" onClick={getPokemonDetails}>
        {buttonLabel}
      </Button>
      <Modal toggle={() => setModal(!modal)} isOpen={modal}>
        <ModalHeader toggle={() => setModal(!modal)}>{name}</ModalHeader>
        <ModalBody>
          <Slideshow
            items={Object.values(sprites)
              .filter(item => item !== null)
              .reverse()}
          />

          {details.description}
          {details.evolutionChain
            ? details.evolutionChain.map((evo, i, arr) => (
                <span key={evo.url}>
                  <a href={evo.url}>{evo.name}</a>
                  {i !== arr.length - 1 ? (
                    <span role="img" aria-label="right">
                      {"  "}▶{"  "}
                    </span>
                  ) : (
                    ""
                  )}
                </span>
              ))
            : ""}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => setModal(!modal)}>
            Do Something
          </Button>
          <Button color="secondary" onClick={() => setModal(!modal)}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
