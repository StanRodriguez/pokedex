import React from "react";
import { Card, CardImg, CardTitle, CardBody, CardText } from "reactstrap";
import { Link } from "react-router-dom";
import "./PokemonCard.css";
import PokemonDetails from "../PokemonDetails/PokemonDetails";
export default function PokemonCard({ pokemon, total }) {
  const { name, sprites, id } = pokemon;
  return (
    <Card
      outline
      color="secondary"
      className="m-2 col-10 col-md-5 col-xl-3 pokemon-card"
    >
      <Link to={`/pokemon/${id}`}>
        <CardImg src={sprites.front_default} alt={name} />
      </Link>
      <CardBody>
        <CardTitle>
          <h4> {name}</h4>
        </CardTitle>
        {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
        <PokemonDetails
          isOpen={total === 1 ? true : false}
          pokemon={pokemon}
          buttonLabel="See details"
        />
        <input type="hidden" value={id} />
        <CardText />
      </CardBody>
    </Card>
  );
}
