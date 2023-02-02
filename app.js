const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const creditCardRoutes = require('./routes/creditcard');

app.use(bodyParser.json()) //application/json

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

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.xixpf9s.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)
.then(resutl => {
    app.listen(3000);
})
.catch(err => {
    console.log(err);
});