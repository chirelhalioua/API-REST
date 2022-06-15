const bodyParser = require('body-parser');
const express = require('express');
const app = express();
require('./models/dbConfig')
const postsRoutes = require('./routes/postsController');
const mongoose = require('mongoose');

//middleware
app.use(bodyParser.json());

app.use('/posts', postsRoutes);


app.get('/', function (req, res) {
    return res.send("Bienvenue!")
})


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Le serveur est opérationnel sur le port ', port);
})

