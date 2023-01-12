/* Lesson Task 1.3:

Connect to this API endpoint:

https://api.noroff.dev/api/v1/books
Display the title, author and publisher properties for each result.

Provide filter inputs that allow a user to filter by author or publisher name.

Use a reusable function to display a message if no filter results are found.

Split your code up using modules.
*/

import { url } from "./constants1.3/settings.js";
import createBooks from "./components1.3/createBooks.js";
import displayMessage from "./components1.3/displayMessage.js";
import searchBooks from "./components1.3/searchBooks.js";

const container = ".result-container";

async function fetchBooks() {
    try {
        const response = await fetch(url);
        const books = await response.json();
        createBooks(books, container);
        searchBooks(books, container);
    } catch (error) {
        console.log(error);
        displayMessage("error", error, container);
    }
}

fetchBooks();