function setTimeoutPromisified(duraction){
    return new Promise(function (resolve){
        setTimeout(resolve, duraction);
    });
}
function callback(){
    console.log("Hello World");
}
setTimeoutPromisified(2000).then(callback);