
import React, { useState, useEffect } from "react";
import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';


import MarvelNavbar from "./app/components/MarvelNavbar/MarvelNavbar";
import MarvelFooter from "./app/components/MarvelFooter/MarvelFooter";
import Home from "./app/pages/Home/Home";
import Comic from "./entities/Comic";
import HeroOverview from "./app/pages/HeroOverview/HeroOverview";
import PageNotFound from "./app/pages/PageNotFound/PageNotFound";
import { Container } from "react-bootstrap";
import { ALL_CHARACTERS_ENDPOINT } from "./service/endpoints.js"

import Communicator from "./service/comunicator.js"


import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.scss";
import Hero from "./entities/Hero";


const App = () => {

  const [characters, setCharacters] = useState([]);
  const [comics, setComics] = useState([]);

  const fetchData = () => {
    // Communicator.fetchAllHeroes().then(response =>
    //   setCharacters(response));
    // Communicator.fetchAllComics().then(response =>
    //   setComics(response));
    fetch("https://gateway.marvel.com/v1/public/characters?ts=1&apikey=d14da3321bb9575f1c5b37eb9588fc56&hash=76d0e73fb5f31b72ae7a0cbd78aa1ced").then(response => {
      return response.json()
    }).then(response => {
      let heroes = response.data.results.map( hero => new Hero(hero.name, hero.description, `${hero.thumbnail.path}portrait_medium.jpg`))
      setCharacters(heroes)
    })
    
    // fetch("https://gateway.marvel.com/v1/public/comics?ts=1&apikey=d14da3321bb9575f1c5b37eb9588fc56&hash=76d0e73fb5f31b72ae7a0cbd78aa1ced").then(response => {
    //   return response.json()
    // }).then(response => {
    //   let comics = response.data.results.map(comic => new Comic(comic.title, `${comic.thumbnail.path}portrait_fantastic.jpg`, comic.prices.price, comic.stories, comic.creators.items.name, comic.characters.collectionURI))
    //   setComics(comics)
    // })
  }

  useEffect(() => {
    fetchData();
  }, ([]));
  console.log(characters)
  console.log(comics)
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
