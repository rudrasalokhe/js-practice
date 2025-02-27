const express = require('express');
const app = express();

// Middleware for parsing JSON data
app.use(express.json());

const users = [];

// Function to generate a random token
function generateToken() {
    let options = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
    ];

    let token = '';
    for (let i = 0; i < 32; i++) {
        token += options[Math.floor(Math.random() * options.length)];
    }
    return token;
}

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
        const token = generateToken();
        findUser.token = token; // Attach the token to the user object
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
    const token = req.headers.authorization;

    let foundUser = null;
    for (let i = 0; i < users.length; i++) {
        if (users[i].token === token) {
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