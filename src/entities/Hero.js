class Hero {
    constructor(id, name, description, photo, comicsCollectionURI) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.photo = photo + "portrait_fantastic.jpg";
        this.comics = comicsCollectionURI;
    }
}

export default Hero;