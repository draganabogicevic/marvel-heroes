class Hero {
    constructor(id, name, description, photo, comicsCollectionURI) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.photo = photo;
        this.comics = comicsCollectionURI;
        this.bookmarked = false;
    }
    toggleBookmark() {
        this.bookmarked = !this.bookmarked;
    }
}

export default Hero;