import Hero from "../entities/Hero";
import Comic from "../entities/Comic";

class Mapper {

  /** 
   * Creates and returns a Hero instance from raw data in given object literal 
   * @returns {Hero}
  */
  static mapJsonToHero(character) {
    const photoURL =  character.thumbnail.path + "portrait_medium.jpg"
    return new Hero(character.name, character.description, photoURL);
  }

  /** 
   * Creates and returns an Comic instance from raw data in given object literal 
   * @returns {Comic}
   * */
  static mapJsonToComic(comic) {
    const photoURL =  comic.thumbnail.path + "portrait_xlarge.jpg"
    return new Comic(comic.title, photoURL, comic.prices.price, comic.printData.stories, comic.creators.items.name, comic.characters.items);
  }

}

export default Mapper;