import axios from "axios";


export default {
    
    googleBooks: function(query) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
    },
    // Gets all books
    getBooks: function() {
        return axios.get("/api/books")
        .then(result => result.data);
    },
    // Gets the book with the given ID
    getBook: function(id) {
        return axios.get("/api/books/" + id)
        .then(result => result.data);
    },
    // Deletes book with the given ID
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id)
        .then(result => result.data);
    },
    // Saves a book to the DB
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData)
        .then(result => result.data);
    }
};
