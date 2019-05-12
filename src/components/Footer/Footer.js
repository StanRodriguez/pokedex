import React from "react";
import { ButtonGroup, Button } from "reactstrap";
import "./Footer.css";
export default function Footer({ first, last, total, getPokemons }) {
  const pokemonsTotal = 807;
  const limit = 5;
  // console.log(first, last, total, getPokemons);
  function handleNext() {
    const range = [];
    if (last + limit > pokemonsTotal) {
      for (let i = last + 1; i <= pokemonsTotal; i++) {
        range.push(i);
      }
      const length = range.length;
      for (let i = 1; i <= limit - (length - 1); i++) {
        range.push(i);
      }
    } else {
      for (let i = last + 1; i <= last + limit; i++) {
        range.push(i);
      }
    }
    getPokemons(range);
  }
  function handlePrevious() {
    const range = [];
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
    <footer>
      <ButtonGroup>
        <Button onClick={handlePrevious}>Prev</Button>
        <Button onClick={handleNext}>Next</Button>
      </ButtonGroup>
    </footer>
  );
}
