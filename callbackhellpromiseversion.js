const { resolve } = require("path");

function setTimeoutPromosified(ms){
    let p = new Promise(resolve => setTimeout(resolve, ms));
    return p;
}
setTimeoutPromosified(3000).then(function(){
    console.log("Hello this is rudra salokhe")
    setTimeoutPromosified(3000).then(function(){
        console.log("Im an aspiring software engineer.")
    })    
})
