import games from "./games.js";

games.forEach(function (game) {
    console.log(game.name);
})



































/*
import games from "./games.js";

const container = document.querySelector(".game-container");

games.forEach(function (game) {
    container.innerHTML += `<li>${game.name} Rating: ${game.rating}</li>`;
});

const items = document.querySelectorAll("li");

items.forEach(function (item) {
    item.addEventListener("click", toggleClass);
});

function toggleClass(event) {
    event.target.classList.toggle("played");
}
*/