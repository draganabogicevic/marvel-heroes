import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchComics } from "../../../service/services";

import { Row, Card } from "react-bootstrap";
import ComicsCard from "./ComicsCard";
import "./HeroDetails.scss";

const HeroDetails = (props) => {
  let { id } = useParams();

  const hero = props.characters.find((hero) => hero.id == id);

  const [comics, setComics] = useState([]);

  useEffect(() => {
    fetchComics(hero.comics)
      .then((comics) => {
        console.log(comics);
        setComics(comics);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!hero) return (<div>Sorry, something went wrong...</div>)
  return (
    <div>
      <p>{"NAME: " + hero.name}</p>
      <p>{"Testing hero id (see if it matches the url): " + id}</p>
      {comics && (
        <div className="ComicsDiv">
          {comics.map(comic => {
            return (
              <ComicsCard
                key={comic.id}
                comic={comic}
              />
            )
          })}
        </div>)}
    </div>
  )
};

export default HeroDetails;

