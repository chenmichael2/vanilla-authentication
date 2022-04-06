const express = require('express');
const app = express();
const bcrypt = require('bcrypt');

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

app.post('/users', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        console.log(salt)
        console.log(hashedPassword)
        const user = {
            name: req.body.name,
            password: hashedPassword
        }
        users.push(user);
        res.status(201).send();
    } catch {
        res.status(500).send();
    }

})

app.listen(3000)