import React from "react";

import { Container } from "react-bootstrap";

import "./SideBar.scss";

const SideBar = (props) => {
  const { bookmarkedHeroes } = props;
  let message = "";

  if (bookmarkedHeroes.length === 0) {
    message = "No heroes for 'My team' selected yet.";
  }

  return (
    <Container fluid>
      <div className="row mb-5">
        <div className="col-lg-12">
          <h3 className="display-3 text-light">My Team</h3>
          <div className="side-menu-container">
            <ul className="nav navbar-nav">
              <div className="container">
                <div>
                  <div className="bg-light m-3 text-dark">
                    <h3>{message}</h3>
                  </div>
                  {bookmarkedHeroes.map((hero) => (
                    <div key={hero.id} className="bg-light m-3">
                      <img
                        className="myTeamPhoto p-2"
                        src={hero.photo}
                        alt="photo of hero"
                      />
                      <span>{hero.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SideBar;
