import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';
import dotenv from 'dotenv';

// get current path
const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


dotenv.config();

const PORT = process.env.PORT || 3000;

const server = http.createServer(async (req, res) => {
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
            let filepath;
            if (req.url === '/') {
                filepath = path.join(__dirname, 'public', 'index.html');
        } else if (req.url === '/about') {
            filepath = path.join(__dirname, 'public', 'about.html');
        } else {
            throw new Error('Not Found');
        }

        const data = await fs.readFile(filepath);
        res.setHeader('Content-Type', 'text/html');
        res.write(data);
        res.end();
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

