const express = require('express');
const app = express();

const creditCardRoutes = require('./routes/creditcard');

// const errorController = require('./controllers/error');
app.use(creditCardRoutes);
app.listen(3000,()=>{
    console.log("app is running");
})