const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const creditCardRoutes = require('./routes/cardRoutes');

app.use(bodyParser.json());

/* allow CORS origin */
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization');
    next();
})

app.use(creditCardRoutes);

app.use((error, req, res, next) => {
    console.log(error);
    res.status(500).json(error);
  })

  //database connection
mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.xixpf9s.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)
.then(resutl => {
    app.listen(process.env.PORT || 3000);
})
.catch(err => {
    console.log(err);
});