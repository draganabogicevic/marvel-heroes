import React from "react";

import { Card, Button } from "react-bootstrap";
import { BookmarkFill, Bookmark, InfoSquareFill } from "react-bootstrap-icons";
import "./HeroCard.scss";


const PLACEHOLDER_HERO = {
  name: "A-Bomb (HAS)",
  description: "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! ",
  photo: "http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16" + "/portrait_xlarge.jpg",
}

const HeroCard = (props) => {

  // TODO: stub
  const isBookmarked = (hero) => {
    // return false;
    return true;
  };

  return (
    <Card className="HeroCard m-2">
      <Card.Img variant="top" src={PLACEHOLDER_HERO.photo} />
      <Card.Body>
        <Card.Title
          className="heroName text-center">
          {PLACEHOLDER_HERO.name}
        </Card.Title>
        {/* <Card.Text>
          {PLACEHOLDER_HERO.description}
        </Card.Text> */}
        <div className="d-flex justify-content-around">
          <InfoSquareFill className="infoBtn">Info</InfoSquareFill>
          {isBookmarked(PLACEHOLDER_HERO) ?
            (<BookmarkFill className="addBtn" />) :
            (<Bookmark className="addBtn" />)
          }
        </div>
      </Card.Body>
    </Card>
  )
}

export default HeroCard;