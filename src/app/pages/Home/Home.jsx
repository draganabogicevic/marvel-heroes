import React from "react";

import SideBar from "../../components/SideBar/SideBar";
import HeroCard from "../../components/HeroCard/HeroCard";

const Home = (props) => {
  const { characters } = props;

  const isBookmarked = (charId) => {
    return props.bookmarked.findIndex(id => id === charId) !== -1;
  };

  const getBookmarked = () => {
    let bookmarkedHeroes = [];
    {characters.map(singleHero => {
      if(isBookmarked(singleHero.id)) {
        bookmarkedHeroes.push(singleHero);
      }
    })}
    return bookmarkedHeroes;
  }

  
  const handleBookmarkClick = (id) => {
    props.onBookmarkClick(id);
  };

  return (
    <div className="row">
      <div className="col-lg-8">
        <input className="m-3" placeholder="search" />
        <button className="btn rounded-pill text-light bg-danger"> Go </button>
        <div className="row">
          {characters.map(singleHero => (
            <HeroCard
              singleHero={singleHero}
              key={singleHero.id}
              bookmarked={isBookmarked(singleHero.id)}
              onBookmarkClick={handleBookmarkClick}
            />
          ))}
        </div>
      </div>
      <div className="col-lg-2 offset-lg-2">
          <SideBar bookmarkedHeroes={getBookmarked()}
        />
  
      </div>
    </div>  
    
     
  )
}

export default Home;