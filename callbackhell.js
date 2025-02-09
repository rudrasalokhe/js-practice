function callbackpromisified(duraction){
    return new Promise(function (resolve){
        setTimeout(resolve, duraction);
    });
}
callbackpromisified(1000).then(function(){
    console.log("hi");
    callbackpromisified(3000).then(function(){
        console.log("Hello");
        callbackpromisified(5000).then(function(){
            console.log("Hi there!!");
        });
    });
});
console.log("Outside the code block");