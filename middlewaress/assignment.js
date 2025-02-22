const express = require('express');
const app = express();

function logger(req, res, next){
    console.log("Method", req.method);
    console.log("Url", req.url);
    console.log(new Date());
    next();
}
app.use(logger);

app.get('/sum', function(req, res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        ans: a+b
    })
})
app.get('/sub', function(req, res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        ans: a-b
    })
})
app.get('/mul', function(req, res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        ans: a*b
    })
})
app.get('/div', function(req, res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        ans: a/b
    })
})
app.listen(3000);