const express = require('express');
const app = express();
const port = 5000;
let counter = 0;
app.get('/', (req, res) => {
    res.json({ counter: counter });
});
app.get('/increment', (req, res) => {
    counter += 1;
    res.json({ counter: counter });
});
app.get('/decrement', (req, res) => {
    counter -= 1;
    res.json({ counter: counter });  
});
app.listen(port, () => {
    console.log(`localhost:${port}`);
});

