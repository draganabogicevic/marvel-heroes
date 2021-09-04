import React from "react";
import { useParams } from "react-router-dom";

const HeroOverview = (props) => {
  let { id } = useParams();

  return (
    <div>
      <p>HERO OVERVIEW GOES HERE</p>
      <p>{"Testing hero id (see if it matches the url): " + id}</p>

    </div>
  )
};

export default HeroOverview;