const http = require('http');
const port = 5000;
const hostname = 'localhost';
const menProducts = [
    { id: 1, name: 'Men Product 1', price: 10 },
    { id: 1, name: 'Men Product 1', price: 10 },
    { id: 1, name: 'Men Product 1', price: 10 },
    { id: 1, name: 'Men Product 1', price: 10 },
    { id: 1, name: 'Men Product 1', price: 10 },
    { id: 1, name: 'Men Product 1', price: 10 },
    { id: 1, name: 'Men Product 1', price: 10 },
    { id: 1, name: 'Men Product 1', price: 10 },
    { id: 1, name: 'Men Product 1', price: 10 },
    { id: 1, name: 'Men Product 1', price: 10 },
];
const womenProducts = [
    { id: 1, name: 'Women Product 1', price: 10 },
    { id: 1, name: 'Women Product 1', price: 10 },
    { id: 1, name: 'Women Product 1', price: 10 },
    { id: 1, name: 'Women Product 1', price: 10 },
    { id: 1, name: 'Women Product 1', price: 10 },
    { id: 1, name: 'Women Product 1', price: 10 },
    { id: 1, name: 'Women Product 1', price: 10 },
    { id: 1, name: 'Women Product 1', price: 10 },
    { id: 1, name: 'Women Product 1', price: 10 },
    { id: 1, name: 'Women Product 1', price: 10 },
];
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Welcome to Men & Women Dummy Data');
    } else if (req.url === '/men') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(menProducts));
    } else if (req.url === '/women') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(womenProducts));
    } else {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Page not found');
    }
});
server.listen(port, hostname, () => {
    console.log(`localhost:${port}`);
});
