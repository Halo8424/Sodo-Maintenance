//File Created Oct 25, 2019
// Authors: L.Dominguez & R.Conde


//---Start of Application

    //--Dependencies
        const express = require('express');
        const mongoose = require('mongoose');
        const routes = require("./routes");

    //--Using Express
        const app = express();

    //--Remote Mongodb database PORT connection or localhost Port connection
        const PORT = process.env.PORT || 3001;


    //--Configure middleware
        //app.use(logger("dev"));
        app.use(express.urlencoded({ extended: true }));
        app.use(express.json());

    //--Serve up static assets (usually on heroku)
        if (process.env.NODE_ENV === "production") {
            app.use(express.static("client/build"));
            }

    //--Set up a static folder (public) for our web app
       // app.use(express.static("public"));

    //--Routes
        app.use(routes);
    //--Connect to the MongoDB
        mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/sodo_db");

    //--Set the app to listen on port 3000
        app.listen(PORT, function() {
        console.log(`Server listening on PORT ${PORT}!`);
        });







//----------Server.js Application Floor----------
//----Developer Notes-----------------
//--Oct 25,    1. Run npm i -y on server.js file (created {} package-lock.json)
            // 2. Dependencies added: express, mongoose
            // 3. init app as express
            // 4. config PORT selection
            // 5. Middleware : "express.urlencoded", "express.json"
            // 6. Set up a static folder (public) 
            // 7. Heroku or local Mongodb database connection ( Commented out )
            // 8. Calling connection ( Commented out )
            // 9. Test Route Working
            // 10. Set app to listen. 

//--Oct 26, // 1. Create a Heroku app in project directory.
            // 2. ran 'heroku addons create mongolab -asodo-m'

//--Oct 28, // 1. Created models folder.
            // 2. Created ticket.js & created 1st ticketSchema.
            // 3. created index.js "exported module". 
            // 4. variable "db" to refference models folder.
            // * Get all Ticket Route not working. "Ta" assistence - created a seeds.js file
            //   Route worked, but no explination on what was wrong. (restructer to model class activity)

//--Oct 29, // 1. Created React app called "client". 
            // 2. Shortened ticket Schema in ticket.js
            // 3. Created seedDB.js file 
            // 4. Refactor server.js 
            // 5. npm i "if-env" & "axios"
            // 6. boiler plate routes => index.js
            // 7. api => index.js set up router.
            // 8. boiler plate ticketsController.js file 
            // 9. boiler plate api => tickets.js
            // 10. Seeded database
            // 11. Created folders in src: components, pages, utils. files: App.js, index.js
            // 12. Created API.js in utils folder
            // 13. Tested "GET" api routes with PostMan. 
            

//--Nov 02, // 1. Created DeleteBtn Component.
            // 2. boiler plate style.css
            // 3. form component boiler plate.
    
//--Nov 03, // 1. Jumbotron Component "bp"
            // 2. 