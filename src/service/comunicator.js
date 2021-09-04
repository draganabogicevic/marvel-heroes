import { ALL_CHARACTERS_ENDPOINT, ALL_CHOMICS_ENDPOINT  } from "./endpoints.js"

import Mapper from "./Mapper";

class Communicator {

  static fetchAllHeroes() {
    return (
      fetch(ALL_CHARACTERS_ENDPOINT)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Error! Response status: ${response.status}`);
          }
          else {
            return response.json();
          }
        }).then((rawJSON) => {
          return rawJSON.map(hero => Mapper.mapJsonToHero(hero))
        })
    );
  }

  static fetchAllComics() {
    return (
      fetch(ALL_CHOMICS_ENDPOINT)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Error! Response status: ${response.status}`);
          } else {
            return response.json();
          }
        }).then(rawJSON => {
          return rawJSON.map(comic => Mapper.mapJsonToComic(comic))
        })
    )
  }
}


export default Communicator;
