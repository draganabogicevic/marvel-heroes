
import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from 'react-router-dom';

import MarvelNavbar from "./app/components/MarvelNavbar/MarvelNavbar";
import MarvelFooter from "./app/components/MarvelFooter/MarvelFooter";
import Home from "./app/pages/Home/Home";
import HeroDetails from "./app/pages/HeroDetails/HeroDetails";
import PageNotFound from "./app/pages/PageNotFound/PageNotFound";

import { fetchHeroes } from "./service/services";

import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.scss";


const App = () => {

  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchHeroes()
      .then((heroes) => {
        console.log(heroes); // TODO: delete
        setCharacters(heroes);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return (<p>Loading...</p>);
  if (characters.length === 0) return (<p>Sorry, something went wrong...</p>);
  return (
    <Container fluid id="MarvelHeroes">
      <MarvelNavbar />

      <Switch>
        <Route exact path="/">
          <Home
            characters={characters}
          />
        </Route>

        <Route exact path="/hero/:id">
          <HeroDetails
            characters={characters}
          />
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
