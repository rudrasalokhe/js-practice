const express = require('express');
const app = express();
app.use(app.json());
app.post('/sum', function(res , req){
    console.log(req.body)
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    res.json({
        ans : a+b
     });
});
app.listen(3000);