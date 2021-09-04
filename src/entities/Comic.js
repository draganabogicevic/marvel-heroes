class Comic {
    constructor(title, photo, price, printDate, creators, characters) {
    this.title = title,
    this.photo = photo,
    this.price = price,
    this.printDate = new Date (printDate),
    this.creators = creators,
    this.characters = characters
    }

}

export default Comic;