const express = require('express');
const app = express();

const users = [
    {
        name: "name",
    }
]

app.get('/users', (req, res) => {
    res.json(users);
})

app.post('/users', (req, res) => {
    
})

app.listen(3000)