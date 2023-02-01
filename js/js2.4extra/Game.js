export default class Game {

    constructor(name, image) {
        this.name = name;
        this.image = image;
    }

    render() {
        return `<div class="game" style="background-image:url(${this.image});">
                    <h5>${this.name}</h5>
                </div>`;
    }
}