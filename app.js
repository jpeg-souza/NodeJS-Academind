const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) =>{
    response.setHeader('Content-Type', 'text/html')
    if(request.url === '/'){
        response.write('<html>');
        response.write('<head><title>Enter Message</title><head>');
        response.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        response.write('</html>');
        return response.end();
    }else if (request.url === '/message' && request.method === 'POST'){
        const body = [];
        request.on('data', (chunk) =>{
            console.log(chunk)
            body.push(chunk)
        })

        request.on('end', () =>{
            const parsedBody = Buffer.concat(body).toString().split('=')[1]
            console.log(parsedBody)
            fs.writeFileSync('message.txt', parsedBody);
            response.statusCode = 302
            response.setHeader('Location', '/')
            return response.end();
        })

    }
    response.end()
});

server.listen(3000);