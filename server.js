const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.static(__dirname));


// API to serve product list
app.get('/api/products', (req, res) => {
  fs.readFile('product.json', 'utf8', (err, data) => {
    if (err) return res.status(500).send('Error reading product data');
    res.json(JSON.parse(data));
  });
});

app.listen(PORT);
