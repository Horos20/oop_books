const ui = new UI()
const ls = new LS()

const form = document.querySelector("form");
form.addEventListener("submit", addBook);
document.addEventListener('DOMContentLoaded', getBooks)
const bookTable = document.querySelector('.rida');
bookTable.addEventListener("click", deleteBook);

function getBooks() {
    const books = ls.getData("books")
    books.forEach(function (book){
        ui.addBook(book)
    })
}

function addBook(event) {
    const titleInput = document.querySelector("#title");
    const authorInput = document.querySelector("#author");
    const isbnInput = document.querySelector("#isbn");

    // Title input value
    const title = titleInput.value;
    // Author input value
    const author = authorInput.value;
    // Isbn input value
    const isbn = isbnInput.value;

    // Create book
    const book = new Book(title, author, isbn);

    ui.addBook(book)
    ls.addBook(book)

    // Clear input value
    titleInput.value = "";
    authorInput.value = "";
    isbnInput.value = "";

    // Form submit event control
    event.preventDefault();
}

function deleteBook(event) {
    if(event.target.textContent === "x") {
        if(confirm("Delete?")) {
            let td_element = event.target.parentElement;
            let book = td_element.parentElement.firstElementChild.textContent;
            ui.deleteBook(td_element)
            ls.deleteBook(book)
        }
    }
}