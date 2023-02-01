import Game from "./Game.js";

(async function() {
  const gameContainer = document.getElementById("container");

  try {
    const url = "https://api.rawg.io/api/games?key=69c4cc6a4ea14a90ae0de0e3f84623d1";
    const response = await fetch(url);
    const result = await response.json();
    const games = result.results;
    console.dir(games);

    gameContainer.innerHTML = "";

    games.forEach(function(game) {
      const gaming = new Game(game.name, game.background_image);
      gameContainer.innerHTML += gaming.render();
    });
  }

  catch(error) {
    console.log(error);
    gameContainer.innerHTML = error;
  }
})()