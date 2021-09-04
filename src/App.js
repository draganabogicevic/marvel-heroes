import React from "react";
import { BrowserRouter } from 'react-router-dom';

import MarvelNavbar from "./app/components/MarvelNavbar/MarvelNavbar";
import MarvelFooter from "./app/components/MarvelFooter/MarvelFooter";
import Home from "./app/pages/Home/Home";
import { Container } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.scss";


const App = () => {
  return (
    <Container fluid id="MarvelHeroes">

      <MarvelNavbar />
      <Home />
      <MarvelFooter />

    </Container>

  );
}

export default App;
