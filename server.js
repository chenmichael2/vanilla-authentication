const express = require('express');
const app = express();


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.use(express.urlencoded({parameterLimit: 100000, limit: '10mb', extended: false}));
app.use(express.json({parameterLimit: 100000, limit: '10mb', extended: false}));

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
    console.log(req.body)
    console.log(user);
    users.push(user);
    res.status(201).send();

})

app.listen(3000)