import React, { useState, useEffect } from "react";
import Speech from "speak-tts";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Progress,
  Pagination,
  PaginationItem,
  PaginationLink
} from "reactstrap";
import { Link } from "react-router-dom";
import Slideshow from "../Slideshow/Slideshow";
const Pokedex = require("pokedex-promise-v2");

export default function PokemonDetails({ buttonLabel, pokemon, total }) {
  const speech = new Speech();
  const { id, name, sprites, stats, species } = pokemon;

  const [modal, setModal] = useState(false);
  const [details, setDetails] = useState({});

  useEffect(() => {
    total === 1 && getPokemonDetails();
  }, []);

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
  function formatEvolutionChain(evolutionChain) {
    return evolutionChain.map((evo, i, arr) => (
      <span key={evo.url}>
        <Link to={"/pokemon" + evo.url}>{evo.name}</Link>
        {i !== arr.length - 1 ? (
          <span role="img" aria-label="right">
            {"  "}▶{"  "}
          </span>
        ) : (
          ""
        )}
      </span>
    ));
  }
  async function getPokemonDetails() {
    const P = new Pokedex();
    try {
      const pokeSpecies = await P.resource([species.url]);

      const pokeEvolutionChain = await P.resource([
        pokeSpecies[0].evolution_chain.url
      ]);

      setDetails({
        description: getDescription(pokeSpecies[0].flavor_text_entries, "en"),
        evolutionChain: getEvolutionChain(pokeEvolutionChain[0].chain),
        habitat: pokeSpecies[0].habitat ? pokeSpecies[0].habitat.name : "N/A"
      });

      setModal(!modal);
    } catch (error) {
      console.error("An error has ocurred getting pokemon details: ", error);
    }
  }
  function tts(text) {
    try {
      speech
        .init()

        .catch(e => {
          console.error("An error occured while initializing : ", e);
        });
      speech
        .speak({
          queue: false,
          text
        })
        .then(() => {
          console.log("Success !");
          return "";
        })
        .catch(e => {
          console.error("An error occurred trying to speak:", e);
        });
    } catch (error) {
      console.error("Error instanciando:", error);
    }
    // will throw an exception if not browser supported
  }
  function formatStats(stats) {
    function getBarColor(number) {
      if (number > 150) {
        return "success";
      } else if (number > 100) {
        return "info";
      } else if (number > 50) {
        return "warning";
      } else {
        return "danger";
      }
    }
    return stats.map((stat, i) => (
      <React.Fragment key={i}>
        <h6>{stat.stat.name}</h6>
        <Progress
          color={getBarColor(stat.base_stat)}
          value={stat.base_stat}
          max="200"
        >
          {stat.base_stat}
        </Progress>
      </React.Fragment>
    ));
  }

  return (
    <React.Fragment>
      <Button color="danger" onClick={getPokemonDetails}>
        {buttonLabel}
      </Button>
      <Modal size="lg" toggle={() => setModal(!modal)} isOpen={modal}>
        <ModalHeader toggle={() => setModal(!modal)}>
          #{id}: {name}
        </ModalHeader>
        <ModalBody className="row">
          <div className="col-12 col-lg-6">
            <Slideshow
              items={Object.values(sprites)
                .filter(item => item !== null)
                .reverse()}
            />
            {modal ? tts(details.description) : speech.cancel()}
            <p>{details.description}</p>
          </div>
          <div className="col-12 col-lg-6">
            <p>
              <span className="h6">Evolution Chain: </span>
              {details.evolutionChain &&
                formatEvolutionChain(details.evolutionChain)}
            </p>
            <p>
              <span className="h6"> Habitat:</span> {details.habitat}
            </p>
            {formatStats(stats)}
          </div>
        </ModalBody>
        <ModalFooter>
          <Pagination aria-label="Page navigation example">
            <PaginationItem>
              <Link to={`/pokemon/${id - 1}`}>
                <PaginationLink previous />
              </Link>
            </PaginationItem>
            <PaginationItem>
              <Link to={`/pokemon/${id + 1}`}>
                <PaginationLink next />
              </Link>
            </PaginationItem>
          </Pagination>
          {/* <Button color="primary" onClick={() => setModal(!modal)}>
            Do Something
          </Button>
          <Button color="secondary" onClick={() => setModal(!modal)}>
            Cancel
          </Button> */}
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
}
