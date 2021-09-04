import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';

import MarvelNavbar from "./app/components/MarvelNavbar/MarvelNavbar";
import MarvelFooter from "./app/components/MarvelFooter/MarvelFooter";
import Home from "./app/pages/Home/Home";
import HeroOverview from "./app/pages/HeroOverview/HeroOverview";
import PageNotFound from "./app/pages/PageNotFound/PageNotFound";

import { Container } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.scss";


const App = () => {
  return (
    <Container fluid id="MarvelHeroes">
      <MarvelNavbar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/hero/:id">
          <HeroOverview />
        </Route>

        <Route exact path="/heroes">
          <Redirect to="/" />
        </Route>

        <Route>
          <PageNotFound />
        </Route>

      </Switch>

      <MarvelFooter />
    </Container>

  );
}

export default App;
