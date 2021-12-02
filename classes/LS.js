class LS{
    getData(key) {
        let data;
        if (localStorage.getItem(key) === null) {
            data = [];
        } else {
            data = JSON.parse(localStorage.getItem(key))
        }
        return data
    }
    setData(key, data) {
        localStorage.setItem("books", JSON.stringify(data))
    }
    addBook(book){
        let books = this.getData("books")
        books.push(book);
        this.setData("books", books)
    }
    deleteBook(book) {
        let books = this.getData("books")
        books.forEach(function (booksElement, key) {
            if(booksElement["title"] === book) {
                books.splice(key, 1);
            }
        });
        this.setData("books", books)
    }
}