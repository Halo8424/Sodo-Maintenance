//File Created Oct 25, 2019
// Authors: L.Dominguez & R.Conde


//---Start of Application

    //--Dependencies
        const express = require('express');
        const mongoose = require('mongoose');

    //--Using Express
        const app = express();

    //--Remote Mongodb database PORT connection or localhost Port connection
        const PORT = process.env.PORT || 3000;


    //--Configure middleware
        //app.use(logger("dev"));
        app.use(express.urlencoded({ extended: true }));
        app.use(express.json());

    //--Set up a static folder (public) for our web app
        app.use(express.static("public"));

    //--Connect to the MongoDB
        //let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/( Database Name)"; //<--remove parenthesis

    //--Calling the connection
        //mongoose.connect(MONGODB_URI);


    //--Test Route
        app.get("/", function(req, res) {
        res.send("Hello world");
        });






    //--Set the app to listen on port 3000
        app.listen(PORT, function() {
        console.log("App running on port 3000!");
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

//--Oct 26, // 1. Create a Heroku app in your project directory.
            // 2. ran 'heroku addons create mongolab -asodo-m'