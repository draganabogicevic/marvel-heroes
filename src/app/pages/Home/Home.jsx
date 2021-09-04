import React from "react";

import HeroCard from "../../components/HeroCard/HeroCard";

const Home = (props) => {
  const { characters } = props;
  return (
    <div className="row">
      <div className="col-md-7">
        <input className="m-3" placeholder="search" />
        <button className="btn rounded-pill text-light bg-danger"> Go </button>
        <div className="row">
          {characters.map(singleHero => (
          <div className="col-md-2 m-2">
            <HeroCard singleHero={singleHero}/>
          </div> 
          ))}
        </div>
      </div> 
      <div className="col-md-2">
        <h4 className="display-5 text-light">My Team</h4>
        <div className="row">
          <div className="col-md-4">
            
          </div>
        </div>
      </div>
   
    </div>
  )
}

export default Home;