const fs = require('fs');
function promiseedversion(filePath){
    return new Promise(function(resolve, reject){
        fs.readFile(filePath, "utf-8", function(err, data){
            if(err){
                reject("Error reading the file");
            }
            else{
                resolve(data);
            }
        });
    });
}
function onDone(data){
    console.log(data);
}
function onerr(err){
    console.log("Err"+err);
}
promiseedversion("a.txt").then(onDone).catch(onerr);