//--Dependencies
    const mongoose = require("mongoose");

//--Save a reference to the Schema constructor
    let Schema = mongoose.Schema;

//--ticket.js Schema makes mongo aware of how we want our data stored. 
    let ticketSchema = new Schema({
  //--name` is required & typeOf String, 'trim' extra white space = true. 
  name: {
    type: String,
    trim: true,
    required: true 
  },
  managerNote: {
    type: String,
    trim: true,
    required: true
  },
  maintenanceNote: {
    type: String,
    trim: true
  },

  viewed: {
    type: Boolean,
    default: false
  },
  inProgress: {
      type: Boolean,
      default: false
  },
  completed: {
      type: Boolean,
      default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
  // `comment` is an object that stores a Comment id
  // The ref property links the ObjectId to the Comment model
  // This allows us to populate a Blogpost with an associated Comment
//   comment: {
//     type: Schema.Types.ObjectId,
//     ref: "Comment"
//   }
});

// This creates our model from the above schema, using mongoose's model method
let ticket = mongoose.model("ticket", ticketSchema);

// Export the BlogPost model
module.exports = ticket; 