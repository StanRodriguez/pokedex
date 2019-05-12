import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import PokemonApp from "./components/PokemonApp/PokemonApp";

function App(props) {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact component={PokemonApp} />
        <Route path="/pokemon/:id" component={PokemonApp} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
