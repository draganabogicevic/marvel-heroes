class Hero {
    constructor(id, name, description, photo, comicsCollectionURI, extension) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.extension = extension;
        this.photo = photo + "/portrait_medium." + this.extension;
        this.comics = comicsCollectionURI;
    }
}

export default Hero;