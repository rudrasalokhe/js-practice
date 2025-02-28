const jwt = require('jsonwebtoken');
const JWT_SECRET = "iloverudra";

function auth(req, res, next){
    const token = req.headers.authorization;
    if(token){
        jwt.verify(token, JWT_SECRET, (err, decoded)=>{
            if(err){
                res.status(401).send({
                    message : "Invalid"
                })
            }
            else{
                req.user = decoded;
                next();
            }
        })
    }
    else{
        res.status(401).send({
            message : "Unauthorized"
        })
    }
}

app.get('/me', (req, res)=>{
    const user = req.user;
    res.send({
        username : user.username
    })
})