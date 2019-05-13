import React from "react";
import { Card, CardImg, CardTitle, CardBody, CardFooter } from "reactstrap";
import { Link } from "react-router-dom";
import "./PokemonCard.css";
import PokemonDetails from "../PokemonDetails/PokemonDetails";
export default function PokemonCard({ pokemon, total }) {
  const { name, sprites, id } = pokemon;
  return (
    <Card
      outline
      color="secondary"
      className="m-2 col-10 col-md-5 col-xl-3 justify-content-center align-items-center pokemon-card"
    >
      <Link to={`/pokemon/${id}`}>
        <CardImg bottom src={sprites.front_default} alt={name} />
      </Link>
      <CardBody>
        <CardTitle>
          <h4>
            #{id}: {name}
          </h4>
        </CardTitle>
        {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
        <CardFooter className="card-footer">
          <PokemonDetails
            total={total}
            pokemon={pokemon}
            buttonLabel="See details"
          />
        </CardFooter>
      </CardBody>
    </Card>
  );
}
