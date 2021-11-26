const ui = new UI()
const ls = new LS()

const form = document.querySelector("form");
form.addEventListener("submit", addBook);

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