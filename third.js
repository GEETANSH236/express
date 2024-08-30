const express = require('express');
const app = express();
const port = 5000;
app.get('/', (req,res) => {
    res.json({ message: 'I am homepage' });
});
app.get('/about', (req,res) => {
    res.json({ message: 'I am about page' });
});
app.get('/contact', (req,res) => {
    res.json({ email: 'support@pwskills.com' });
});
app.listen(port, () => {
    console.log(`localhost:${port}`);
});
