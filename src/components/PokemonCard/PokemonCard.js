import React from "react";
import { Card, CardImg, CardTitle, CardBody, CardText } from "reactstrap";
import { Link } from "react-router-dom";
import "./PokemonCard.css";
export default function PokemonCard({ pokemon }) {
  const { name, sprites, id } = pokemon;
  return (
    <Card
      outline
      color="secondary"
      className="m-2 col-10 col-md-5 col-xl-3 pokemon-card"
    >
      <Link to={`/${id}`}>
        <CardImg src={sprites.front_default} alt={name} />
      </Link>
      <CardBody>
        <CardTitle>
          <h4> {name}</h4>
        </CardTitle>
        {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
        <input type="hidden" value={id} />
        <CardText />
      </CardBody>
    </Card>
  );
}
