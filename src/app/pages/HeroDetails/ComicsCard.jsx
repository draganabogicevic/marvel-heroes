import React, { Fragment } from "react";

import { Card } from "react-bootstrap";
import "./ComicsCard.scss";

const ComicsCard = (props) => {
  const { comic } = props;

  if (!comic.title) return (<Fragment />);
  return (
    <div className="ComicsCard mx-1">
      <img src={comic.photo} />
      <div className="titleDiv"><h6>{comic.title}</h6></div>
    </div>
  )
}

export default ComicsCard;