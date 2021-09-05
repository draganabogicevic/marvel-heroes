import React from "react";
import { Link } from 'react-router-dom';

import { Card, Button, CardGroup } from "react-bootstrap";
import { BookmarkFill, Bookmark, InfoSquareFill } from "react-bootstrap-icons";
import "./HeroCard.scss";

const HeroCard = (props) => {
  const { singleHero } = props

  // TODO: stub
  const isBookmarked = (hero) => {
    // return false;
    return true;
  };

  return (

    <div className="col-md-2 m-2">
      <CardGroup>

        <Card className="HeroCard m-2">

          <Card.Img className="cardImg" variant="top" src={singleHero.photo} alt="no image" />
          <Card.Body>
            <Card.Title
              className="heroName text-center">
              {singleHero.name}
            </Card.Title>

            <div className="d-flex align-items-end">
              <Link to={"/hero/" + singleHero.id}><InfoSquareFill className="infoBtn">Info</InfoSquareFill></Link>
              <div>{isBookmarked(singleHero) ?
                (<BookmarkFill className="addBtn" />) :
                (<Bookmark className="addBtn" />)
              }
              </div>
            </div>
          </Card.Body>

        </Card>

      </CardGroup>
    </div>

  )
}

export default HeroCard;