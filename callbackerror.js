const fs = require('fs');
function afterDone(err, data){
    if(err){
        console.log("Error in the data")
    }
    else{
        console.log(data);
        
    }
}
fs.readFile('a.txt','utf-8', afterDone);