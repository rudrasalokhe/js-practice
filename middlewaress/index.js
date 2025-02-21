// middlewares are the one which which call a block of code first then the other parts or function of a code


// second point it it can modify the request or the response of an object








const express = require("express");
const app = express();
let requestcount = 0;
function requestcount(req, res , next){
    requestcount++;
    console.log(`Total number of requests are ${requestcount}`);
    next();
}
function sumHandler(req, res){
    console.log(`The number of requests are ${requestcount}`);
    const a  = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        answer : a + b
    })
}
app.get('/sum/:a/:b', requestcount, sumHandler);
app.get('/sub/:a/:b', function(req,requestcount, res){
    
    console.log(`The number of requests are ${requestcount}`);
    const a  = req.params.a;
    const b = req.params.b;
    res.json({
        answer : a - b
    })
})
app.get('/mul/:a/:b', function(req,requestcount, res){
    
    console.log(`The number of requests are ${requestcount}`);
    const a  = req.params.a;
    const b = req.params.b;
    res.json({
        answer : a * b
    })
})
app.get('/div/:a/:b', function(req,requestcount, res){
    
    console.log(`The number of requests are ${requestcount}`);
    const a  = req.params.a;
    const b = req.params.b;
    res.json({
        answer : a / b
    })
})

app.listen(3000);