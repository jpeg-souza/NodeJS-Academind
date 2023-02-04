const http = require('http');

const express = require('express');

const app = express();

app.use((request, response, next) =>{
    console.log('in the first middleware', request.originalUrl) // browser requesting favicon
    next();
});

app.use((request, response, next) =>{
    console.log('in the second middleware')
    response.send('<h1>Hello NodeJS</h1>');
})

const server = http.createServer(app);

server.listen(3000);