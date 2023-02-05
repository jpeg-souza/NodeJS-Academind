// using middleware with express

const express = require('express');

const app = express();

app.use('/users', (request, response, next) =>{
    console.log('The second Middleware');
    response.send('<h1>Dummy data for /users route.</h1>')
})

app.use('/', (request, response, next) =>{
    console.log('The first Middleware');
    response.send('<h1>Dummy data for / route.</h1>');
    next();
})


app.listen(3000);