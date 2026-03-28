'use strict';

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const products = [
    { id: 1, name: 'Coffee', price: 5.99 },
    { id: 2, name: 'Espresso', price: 3.99 },
    { id: 3, name: 'Latte', price: 4.99 },
    { id: 4, name: 'Cappuccino', price: 4.49 },
];

app.get('/api/products', (req, res) => {
    res.json(products);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
