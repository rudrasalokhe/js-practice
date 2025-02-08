const fs = require('fs');

function paint(err, data){
    if(err){
        console.log("File not found");
    }
    else{
        console.log(data);
    }
}
fs.readFile('a.txt', 'utf-8', paint);
fs.readFile('b.txt', 'utf-8', paint);
fs.readFile('c.txt', 'utf-8', paint);