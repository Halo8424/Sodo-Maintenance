//--Dependencies
    const mongoose = require("mongoose");
    const Schema = mongoose.Schema;

    const ticketSchema = new Schema({
        title: { type: String, required: true},
        manager: { type: String, required: true};
        note: String,
        date: { type: Date, default: Date.now}
    });

    const Ticket = mongoose.model("Ticket", ticketSchema);

    module.exports = ticket; 