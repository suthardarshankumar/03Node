const express = require('express');
const app = express();


// app get(routes, requestHandler and middleware(is a function))

// Create a Router.
app.get("/", function (req, res) {
    res.send(`Hello form Home Page.`);
})

// nodemon index.js -- for run a nodemon.

app.get("/profile", function (req, res) {
    res.send('Hello form Profile Page.')
})

// Run on this port.
app.listen(4000);

//Note
// middleware is perform a some tast or code before to routing.