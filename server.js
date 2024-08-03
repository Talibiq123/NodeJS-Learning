import http from 'http'

const PORT = 8000

const server = http.createServer((req, res) => {
    // res.write('Hello, World!');
    // res.end();

    // res.setHeader('Content-Type', 'text/html')
    // res.statusCode = 404;
    // res.end('<h1>Hello, World!</h1>');

    res.writeHead(500, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({message: 'server error'}));
    
    // res.end('Hello, World!');

})


server.listen(PORT, () => {
    console.log(`server listening on ${PORT}`);
})
