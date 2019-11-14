//--Dependencies
    const mongoose = require("mongoose");
    const Schema = mongoose.Schema;

//--Ticket Schema makes mongodb aware of how and what we wan the database to have. 
    const ticketSchema = new Schema({
        title: { type: String, required: true},
        manager: { type: String, required: true},
        note: String,
        date: { type: Date, default: Date.now},
        comments: [
            {
                type: Schema.Types.ObjectId,
                ref: "Comments"
            }
        ]

    });

    const Ticket = mongoose.model("Ticket", ticketSchema);

    module.exports = Ticket; 