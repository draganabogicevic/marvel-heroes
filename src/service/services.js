import Hero from "../entities/Hero";
import Comic from "../entities/Comic";


const KEY = "?ts=1&apikey=d14da3321bb9575f1c5b37eb9588fc56&hash=76d0e73fb5f31b72ae7a0cbd78aa1ced";
const ALL_CHARACTERS_ENDPOINT = "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=d14da3321bb9575f1c5b37eb9588fc56&hash=76d0e73fb5f31b72ae7a0cbd78aa1ced";



export const fetchHeroes = () => {
  return fetch(ALL_CHARACTERS_ENDPOINT)
    .then(response => {
      return response.json();
    }).then(json => {
      console.log(json.data.results);
      let heroes = json.data.results.map((hero) => {
        return new Hero(hero.id, hero.name, hero.description,
          hero.thumbnail.path + "/", hero.comics.collectionURI, hero.thumbnail.extension);
      });
      return heroes;
    });
};

// hero.comics.collectionURI gives you all the comics where the selected character
// appears - in one response
// structure: an object:
// you need: response.data.results ->>>>> array of objects
// in each array element, you need: id, title, description, thumbnail.path...

export const fetchComics = (collectionURI) => {
  return fetch(collectionURI + KEY)
    .then(response => response.json())
    .then(json => {
      console.log("FETCHED COMICS: ", json);
      let comics = json.data.results.map(comic => {
        return new Comic(comic.id, comic.title, comic.description,
          comic.thumbnail.path + "/landscape_medium.jpg", comic.creators,
          comic.characters, comic.prices[0].price, comic.dates[0].date);
      });
      console.log(comics);
      return comics;
    });
};