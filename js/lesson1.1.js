// question 1

const resultsContainer = document.querySelector(".results-container");

const url = "https://rickandmortyapi.com/api/character";

async function getCharacters() {
    try {
        const response = await fetch(url);
       const results = await response.json();
       const characters = results.results;
       console.log(characters);

       resultsContainer.innerHTML = "";

       for(let i = 0; i < 7; i++) {
        resultsContainer.innerHTML += `
                                        <div class="result">
                                            <h2>${characters[i].name}</h2>
                                            <p>${characters[i].status}</p>
                                            <p>${characters[i].gender}</p>
                                            <span>${characters[i].species}</span>
                                            <img src="${characters[i].image}"/>
                                        </div>
        `;
       }
    }
    catch (error) {
        console.log(error);
        resultsContainer.innerHTML = displayMessage("error", error);
    }
}

getCharacters();

function displayMessage(type, message) {
    return `<div class="message ${type}">${message}</div>`;
}

/*
Noroff´s version

const url = "https://rickandmortyapi.com/api/character";

const resultContainer = document.querySelector(".results-container");

async function getCharacters() {
    try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);

        createHtml(json);

    } catch (error) {
        console.log(error);
        resultContainer.innerHTML = displayMessage("error", error);
    }
}

getCharacters();

function displayMessage(type, message) {
    return `<div class="message ${type}">${message}</div>`;
}

function createHtml(data) {
    resultsContainer.innerHTML = "";

    for (let i = 0; i < 7; i++) {
        resultContainer.innerHTML += `<div class="result">
                                        <h4>${data[i].name}</h4>
                                        <p>Birthday: <b>${data[i].birthday}</b></p>
                                        <p>Nickname: <b>${data[i].nickname}</b></p>
                                        <div>Occupations:                                         
                                            ${createTags(data[i].occupation)}
                                        </div>
                                    </div>`;
    }
}

function createTags(list = []) {
    let tags = "";

    list.forEach((item) => (tags += `<span>${item}</span>`));

    return tags;
}
*/

// question 2
/*
Destructure the id, title, genre and year properties from the game object.

const game = {
  id: 0,
  title: 'Street Rod 2',
  genre: 'Racing',
  rating: 5,
  multiplayer: false,
  year: 1992,
  publisher: ['California Dreams'],
  developer: ['Logical Design Works, Inc.', 'P.Z.Karen Co. Development Group'],
};

const { id, title, genre, year } = game;
*/

// question 3
/*
Change the dot notation variable assignments to be destructured from the object,
as well as fix any incorrect/outdated variable names.

const user = {
  firstName: 'Ola',
  lastName: 'Nordmann',
  currentModule: 'JavaScript 2',
};

const { firstName, lastName, currentModule } = user;

const greeting = `Hi! My name is ${firstName} ${lastName} and I´m on ${currentModule}`;
console.log(greeting);
*/

// question 4
/*
Destructure the make, model and price properties as parameters and update any references to these variables.

function displayProductDetails({ make, model, price }) {
  console.log('Make:', make);
  console.log('Model:', model);
  console.log('Price:', price);
}

const newProduct = {
  make: 'Z-Corp',
  model: 'SZ-201',
  price: 19.99,
};

displayProductDetails(newProduct);
*/

// question 5
/*
Destructure the first two values from the temperatures array and then destructure
the rest of the array values as a single value using the rest parameter.

const temperatures = [101, 95, 102, 112, 98, 89, 109, 100];

const [temperature1, temperature2, ...rest] = temperatures;
*/