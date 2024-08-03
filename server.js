import http from 'http'
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    // res.write('Hello, World!');
    // res.end();

    // res.setHeader(404, {'Content-Type', 'text/html'})
    // res.statusCode = 404;
    // res.end('<h1>Hello, World!</h1>');

    // res.writeHead(500, {'Content-Type': 'application/json'});
    // res.end(JSON.stringify({message: 'server error'}));

    // res.end('Hello, World!');

    try {
        // Check if request is GET
        if (req.method === 'GET') {
            if (req.url === '/') {
                res.writeHead(200, {'Content-Type': 'text/html'})
                res.end('<h1>Hello, World!</h1>');
        } else if (req.url === '/about') {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end('<h1>About websites</h1>');
        } else {
            res.writeHead(404, {'Content-Type': 'text/html'})
            res.end('<h1>Not Found!</h1>');
        }
        } else {
            throw new Error('Method not found');
        }
    } catch (error) {
        res.writeHead(404, {'Content-Type': 'text/plain'})
        res.end('<h1>Server Error!</h1>');
    }



})


server.listen(PORT, () => {
    console.log(`server listening on ${PORT}`);
})

