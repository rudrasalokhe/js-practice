const express = require('express');
const app = express();
const path = require('path');
const jwt = require('jsonwebtoken');

const JWT_SECRET = "rudraiscoding";
app.use(express.json());

let users = [];

// Signup route
app.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    });

    res.json({
        message: "Signed up"
    });

    console.log(users);
});

// Signin route
app.post('/signin', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    let userfound = null;

    for (let i = 0; i < users.length; i++) {
        if (users[i].username == username && users[i].password == password) {
            userfound = users[i];
        }
    }

    if (userfound) {
        const token = jwt.sign({ username: username }, JWT_SECRET);
        res.json({ token: token });
    } else {
        res.status(401).json({ message: "Invalid username and password" });
    }
    console.log(users);
});

// Authentication middleware
function auth(req, res, next) {
    const token = req.headers.token;

    try {
        const decodedInformation = jwt.verify(token, JWT_SECRET);
        req.username = decodedInformation.username;
        next();
    } catch (err) {
        res.json({ message: "Invalid token" });
    }
}

// Get user information
app.get('/me', auth, (req, res) => {
    let found = null;

    for (let i = 0; i < users.length; i++) {
        if (users[i].username === req.username) {
            found = users[i];
        }
    }

    if (found) {
        res.json({
            username: found.username,
            password: found.password
        });
    } else {
        res.status(404).json({ message: "User not found" });
    }
    console.log(users);
});

// Serve the HTML file from the `/` route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(3003, () => {
    console.log("Server is running on port 3003");
});
