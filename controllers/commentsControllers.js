const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Comments
    .find(req.query)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  create: function(req, res){
    db.Comments.create(req.body)
      .then(data => {
        return db.Ticket.findOneAndUpdate({ _id: req.params.id }, { $push: { comments: data._id } }, { new: true });
        })
          .then(data => {
              res.json(data)
          })
          .catch(function (err) {
              res.json(err);
          });
  }


};