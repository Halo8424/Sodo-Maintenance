//--Dependencies
    const router = require("express").Router();
    const ticketRoutes = require("./tickets");
    const commentsRoutes = require("./comments");

//--Ticket routes
    router.use("/tickets", ticketRoutes);
    router.use("/comments", commentsRoutes);

    module.exports = router;