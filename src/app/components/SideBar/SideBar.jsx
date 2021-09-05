import React from "react";

import "./SideBar.scss"

const SideBar = (props) => {
    const { bookmarkedHeroes } = props;
    
    return (

        <div className="msb" id="msb">
		    <nav className="navbar navbar-default" role="navigation">
			    <div className="navbar-header">
				    <div className="brand-wrapper">
					    <div className="brand-name-wrapper">
							<h3 className="display-3 text-light">My Team</h3>
					    </div>
				    </div>
                </div>
			    <div className="side-menu-container">
				    <ul className="nav navbar-nav">
                        <div className="container">
                            <div>
                                {bookmarkedHeroes.map(hero => (
                                    <div key={hero.id} className="bg-light m-3">
                                        <img className="myTeamPhoto p-2" src={hero.photo} alt="photo of hero"/>
                                        <span>{hero.name}</span>
                                    </div>
                                ))}
                                
                            </div>
                        </div>
				    </ul>
			    </div>
		    </nav>  
        </div>
    )
}

export default SideBar;
