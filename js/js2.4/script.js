import Developer  from "./Developer.js";

//console.log(typeof Developer);

(async function () {
    // select before the try so we can use it in the catch too
    const container = document.querySelector(".developer-container");

    try {
        const url = "https://api.rawg.io/api/developers?key=69c4cc6a4ea14a90ae0de0e3f84623d1";
        const response = await fetch(url);
        const results = await response.json();
        const developers = results.results;
        console.log(developers);

        container.innerHTML = "";

        developers.forEach(function(developer) {
            const dev = new Developer(developer.name, developer.image_background);
            container.innerHTML += dev.render();
        });
    }

    catch(error){
        console.log(error);
        container.innerHTML = error;
    }
})();