const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const isbnInput = document.querySelector("#isbn");

document.addEventListener('DOMContentLoaded', getBooksFromLocalStorage)

function getBooksFromLocalStorage() {
    let books;
    if (localStorage.getItem('books') === null) {
        books = [];
    } else {
        books = JSON.parse(localStorage.getItem('books'))
    }
    books.forEach(function (booksElement) {
        // Title input value
        const title = booksElement[0];
        // Author input value
        const author = booksElement[1];
        // Isbn input value
        const isbn = booksElement[2];

        const tbody = document.querySelector("tbody");

        // Create and append tr element
        const tr = document.createElement("tr");
        tbody.appendChild(tr);
        tr.className = 'rida';

        // Make first td element (title)
        const td1 = document.createElement("td");
        tr.appendChild(td1);
        td1.innerHTML = title;

        // Make second td element (author)
        const td2 = document.createElement("td");
        tr.appendChild(td2);
        td2.innerHTML = author;

        // Make third td element (isbn)
        const td3 = document.createElement("td");
        tr.appendChild(td3);
        td3.innerHTML = isbn;

        // Create link element
        const alink = document.createElement('a');
        // Create text node
        const linkText = document.createTextNode("x");
        // Add text to link
        alink.appendChild(linkText);
        // Create link reference
        alink.href = "#";

        // Make fourth td element (x link)
        const td4 = document.createElement("td");
        tr.appendChild(td4);
        td4.appendChild(alink);
    });
}

const form = document.querySelector("form");
form.addEventListener("submit", addBook);

const bookTable = document.querySelector('.rida');
bookTable.addEventListener("click", deleteTask);

function addBook(event) {

    // Title input value
    const title = titleInput.value;
    // Author input value
    const author = authorInput.value;
    // Isbn input value
    const isbn = isbnInput.value;

    const tbody = document.querySelector("tbody");

    // Create and append tr element
    const tr = document.createElement("tr");
    tbody.appendChild(tr);
    tr.className = 'rida';

    // Make first td element (title)
    const td1 = document.createElement("td");
    tr.appendChild(td1);
    td1.innerHTML = title;

    // Make second td element (author)
    const td2 = document.createElement("td");
    tr.appendChild(td2);
    td2.innerHTML = author;

    // Make third td element (isbn)
    const td3 = document.createElement("td");
    tr.appendChild(td3);
    td3.innerHTML = isbn;

    // Create link element
    const alink = document.createElement('a');
    // Create text node
    const linkText = document.createTextNode("x");
    // Add text to link
    alink.appendChild(linkText);
    // Create link reference
    alink.href = "#";

    // Make fourth td element (x link)
    const td4 = document.createElement("td");
    tr.appendChild(td4);
    td4.appendChild(alink);

    // Save book
    massiiv = [title, author, isbn];
    addTaskToLocalStorage(massiiv);

    // Clear input value
    titleInput.value = "";
    authorInput.value = "";
    isbnInput.value = "";

    // Form submit event control
    event.preventDefault();
}

function deleteTask(event) {
    if(event.target.textContent === "x") {
        if(confirm("Delete?")) {
            td_element = event.target.parentElement;
            td_element.parentElement.remove();
            book = td_element.parentElement.firstChild.textContent;
            deleteTaskFromLocalStorage(book);
        }
    }
}

function addTaskToLocalStorage(massiiv) {
    let books;
    if (localStorage.getItem('books') === null) {
        books = [];
    } else {
        books = JSON.parse(localStorage.getItem('books'))
    }
    books.push(massiiv);
    localStorage.setItem("books", JSON.stringify(books))
}

function deleteTaskFromLocalStorage(book) {
    let books;
    if (localStorage.getItem('books') === null) {
        books = [];
    } else {
        books = JSON.parse(localStorage.getItem('books'))
    }
    books.forEach(function (booksElement, index) {
        if(booksElement[0] === book) {
            books.splice(index, 1);
        }
    });
    localStorage.setItem("books", JSON.stringify(books))
}