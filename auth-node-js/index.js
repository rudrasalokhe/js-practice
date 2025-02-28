const express = require('express');
const app = express();
const JWT_SECRET = "randomrudrasalokhe";
const jwt = require('jsonwebtoken');

// this is a middleware which is used to like parse a json data
app.use(express.json());

const users = [];


// Route for user signup
app.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    });

    res.json({
        message: "You are signed up!"
    });

    console.log(users);
});

// Route for user signin
app.post('/signin', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    let findUser = null;
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
            findUser = users[i];
        }
    }

    if (findUser) {
        const token = jwt.sign({
            username : username
        }, JWT_SECRET);
        // findUser.token = token; 
        res.json({
            token: token
        });
    } else {
        res.status(403).json({
            message: "Invalid username or password"
        });
    }

    console.log(users);
});


app.get('/me', (req, res) => {
    const token = req.headers.token;
    const decodedInformation = jwt.verify(token, JWT_SECRET);
    const username = decodedInformation.username;
    let foundUser = null;
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {
            foundUser = users[i];
            
        }
    }

    if (foundUser) {
        res.json({
            username: foundUser.username,
            password: foundUser.password 
        });
    } else {
        res.status(403).json({
            message: "Invalid token"
        });
    }
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});


//1.15.00