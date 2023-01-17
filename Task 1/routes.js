const fs = require('fs');

const requestHandler = (request, response) =>{
    const url = request.url;
    const method = request.method;

    if(url === '/'){
        response.write('<html>');
        response.write('<head><title>Enter Message</title><head>');
        response.write('<body><h2>Hello! This is the first Task of Node.js Course</h2>')
        response.write('<p>Please, type your new username here.</p>')
        response.write('<form action="/create-user" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        response.write('</html>');
        return response.end();
    }

    if(url === '/users'){
        response.write('<html>');
        response.write('<head><title>Users List</title><head>');
        response.write('<body><h2>List of users</h2>')
        response.write('<ul>');
        response.write('<li>takanuva</li>');
        response.write('<li>souza-jpeg</li>');
        response.write('<li>sa5m</li>');
        response.write('<li>NILO</li>');
        response.write('<li>prettyLittleSun</li>');
        response.write('</ul></body></html>');
        return response.end();
    }
    
    if (url === '/create-user' && method === 'POST'){
        const body = [];
        request.on('data', (chunk) =>{
            body.push(chunk)
        })

        return request.on('end', () =>{
            const parsedBody = Buffer.concat(body).toString().split('=')[1]
            console.log(parsedBody)
        })

    }
    response.setHeader('Content-Type', 'text/html')
    response.write('<html>')
    response.write('<head><title>My First Page</title><head>')
    response.write('<body><h1>Hello! This is my first Node.js Server!</h1></body>')
    response.write('</html>')
    response.end()
}

// module.exports = {
//     handler: requestHandler,
//     someText: 'Some hard coded text'
// };

exports.handler = requestHandler;