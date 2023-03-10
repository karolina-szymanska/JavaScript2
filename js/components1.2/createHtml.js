import { limit } from "./constants1.2/settings.js";
import { createTags } from "./createTags.js";

export function createHtml(data) {
    resultContainer.innerHTML = "";

    for (let i = 0; i < limit; i++) {
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