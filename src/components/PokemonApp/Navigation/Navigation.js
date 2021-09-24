import React from "react";
import { ButtonGroup, Button } from "reactstrap";
import "./Navigation.css";
export default function Navigation({
  first,
  last,
  total,
  getPokemons,
  pokemonsTotal = 807,
  limit = 6,
}) {
  // next button
  function handleNext() {
    const range = [];
    //edge case if it's the last one
    if (last + limit > pokemonsTotal) {
      for (let i = last + 1; i <= pokemonsTotal; i++) range.push(i);

      const length = range.length;

      for (let i = 1; i <= limit - length; i++) range.push(i);
    } else for (let i = last + 1; i <= last + limit; i++) range.push(i);

    getPokemons(range);
  }
  //previous button
  function handlePrevious() {
    const range = [];
    //edge case if it's the first one
    if (first - limit <= 1) {
      for (let i = pokemonsTotal - limit; i < pokemonsTotal; i++) {
        range.push(i);
      }
    } else {
      for (let i = first - limit; i <= first - 1; i++) {
        range.push(i);
      }
    }
    getPokemons(range);
  }
  return (
    <div className="navigation">
      <ButtonGroup>
        <Button outline color="danger" onClick={handlePrevious}>
          Prev
        </Button>
        <Button outline color="danger" onClick={handleNext}>
          Next
        </Button>
      </ButtonGroup>
    </div>
  );
}
