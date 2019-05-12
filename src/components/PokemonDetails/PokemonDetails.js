import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Slideshow from "../Slideshow/Slideshow";
const Pokedex = require("pokedex-promise-v2");

export default function PokemonDetails({ buttonLabel, pokemon }) {
  const { id, name, sprites, species } = pokemon;
  const [modal, setModal] = useState(false);
  const [details, setDetails] = useState({});

  function getEvolutionChain({ chain }) {
    const cleanedChain = [];
    console.log(chain.evolves_to);
  }
  async function getPokemonDetails() {
    const P = new Pokedex();
    try {
      const pokeSpecies = await P.resource([species.url]);

      const pokeEvolutionChain = await P.resource([
        pokeSpecies[0].evolution_chain.url
      ]);
      console.log(pokeSpecies, pokeEvolutionChain);
      // getEvolutionChain(response[1]);
      setDetails({
        description: pokeSpecies[0].flavor_text_entries[1].flavor_text
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
