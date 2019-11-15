const express = require('express');
const mongoose = require('mongoose');
const routes = require("./routes");
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require('./routes/api/users');

const app = express();
const port = process.env.PORT || 5000;


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//app.use(routes);

const db = require("./config/keys").mongoURI;
mongoose.connect(db, { useNewUrlParser: true }).then(() => console.log("MongoDB connected")).catch((err) => console.log(err));

app.use(passport.initialize());
require('./config/passport')(passport);

app.use('/api/users', users);
app.use(routes);


app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});