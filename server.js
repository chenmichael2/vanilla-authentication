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
    const user = {
        name: req.body.name,
        password: req.body.password
    }

})

app.listen(3000)