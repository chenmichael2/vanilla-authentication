const express = require('express');
const app = express();

app.get('/users', (req, res) => {
    res.json(users);
})