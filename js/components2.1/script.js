/*
Using the array in script.js, create a list from each item displaying
the name and rating property for each.
Clicking on an item should toggle a class called played on each item.
*/

import games from "./games.js";

const container = document.querySelector(".game-container");

games.forEach(function (game) {
    container.innerHTML += `<li>Title: ${game.name}, Rating: ${game.rating}</li>`;
})

const items = document.querySelectorAll("li");

items.forEach(function(item) {
    item.addEventListener("click", toggleClass);
})

function toggleClass (event) {
    event.target.classList.toggle("played");
}