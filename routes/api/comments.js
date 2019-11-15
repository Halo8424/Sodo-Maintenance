const router = require("express").Router();
const commentsController = require("../../controllers/commentsControllers");


router.route("/")
  .get(commentsController.findAll)
  .post(commentsController.create);

router
  .route("/:id")
  .post(commentsController.create);
  
 
module.exports = router; 