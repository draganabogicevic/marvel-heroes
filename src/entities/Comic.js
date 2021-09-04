class Comic {
    constructor(id, title, description, photo, creators, characters, price, printDate) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.photo = photo;
        this.price = price;
        this.printDate = new Date(printDate);
        this.creators = creators;
        this.characters = characters;
    }

}

export default Comic;