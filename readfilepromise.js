const fs = require('fs');
function promiseedversion(FilePath, encoding='utf-8'){
    return new Promise((resolve, reject) =>{
        fs.readFile(FilePath, encoding, (err, data)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(data);
            }
        });
    });
}
promiseedversion('a.txt').then(data=>{
    console.log(`File content is ${data}`)
})
.catch(err=>{
    console.log("Error reading the file");
})