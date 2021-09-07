import React from "react";

import SideBar from "../../components/SideBar/SideBar";
import HeroCard from "../../components/HeroCard/HeroCard";

const Home = (props) => {
  const { characters } = props;

  const handleBookmarkClick = (id) => {
    props.onBookmarkClick(id);
  };

  return (
    <div className="row">
      <div className="col-lg-9">
        <input className="m-3" placeholder="search" />
        <button className="btn rounded-pill text-light bg-danger"> Go </button>
        <div className="row">
          {characters.map((singleHero) => (
            <HeroCard
              singleHero={singleHero}
              key={singleHero.id}
              onBookmarkClick={handleBookmarkClick}
            />
          ))}
        </div>
      </div>
      <div className="col-lg-3">
        <SideBar bookmarkedHeroes={props.bookmarked} />
      </div>
    </div>
  );
};

export default Home;
