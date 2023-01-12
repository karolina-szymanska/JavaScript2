// Convert the code to use modules,
// that is, split the code into files using imports and exports: lines 5-48

/*
const url = "https://www.breakingbadapi.com/api/characters";

const resultContainer = document.querySelector(".result-container");

async function callApi() {
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

callApi();

function displayMessage(type, message) {
    return `<div class="message ${type}">${message}</div>`;
}

function createHtml(data) {
    resultContainer.innerHTML = "";

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

/* ANSWER:

import { url } from "./constants1.2/api.js";
import { createHtml } from "./components1.2/createHtml.js";
import { displayMessage } from "./components1.2/displayMessage.js";

const url = "https://www.breakingbadapi.com/api/characters";

const resultContainer = document.querySelector(".result-container");

async function callApi() {
    try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        createHtml(json);
    } catch (error) {
        console.log(error);
        displayMessage("error", error, ".result-container");
    }
}

callApi();
*/ 