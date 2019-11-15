const router = require("express").Router();
const ticketsController = require("../../controllers/ticketsController");


router.route("/")
  .get(ticketsController.findAll)
  .post(ticketsController.create);


router
  .route("/:id")
  .get(ticketsController.findById)
  .put(ticketsController.update)
  .delete(ticketsController.remove);
  
 
module.exports = router; 