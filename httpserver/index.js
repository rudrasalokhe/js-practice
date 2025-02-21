const express = require("express");
const app = express();
app.get('/sum/:a/:b', function(req, res){
    const a  = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        answer : a + b
    })
})
app.get('/sub/:a/:b', function(req, res){
    const a  = req.params.a;
    const b = req.params.b;
    res.json({
        answer : a - b
    })
})
app.get('/mul/:a/:b', function(req, res){
    const a  = req.params.a;
    const b = req.params.b;
    res.json({
        answer : a * b
    })
})
app.get('/div/:a/:b', function(req, res){
    const a  = req.params.a;
    const b = req.params.b;
    res.json({
        answer : a / b
    })
})

app.listen(3000);