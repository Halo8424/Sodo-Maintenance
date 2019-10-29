import axios from "axios";

export default {
  // Gets all books
  getTickets: function() {
    return axios.get("/api/tickets");
  },
  // Gets the book with the given id
  getTicket: function(id) {
    return axios.get("/api/tickets/" + id);
  },
  // Deletes the book with the given id
  deleteTicket: function(id) {
    return axios.delete("/api/tickets/" + id);
  },
  // Saves a book to the database
  saveTicket: function(bookData) {
    return axios.post("/api/tickets", bookData);
  }
};