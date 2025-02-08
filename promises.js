// function setTimeoutPromosified(ms){
//     let p =  new Promise(resolve => setTimeout(resolve, ms));
//     return p;
// }
// function callback(){
//     console.log("3  seconds have passed")
// }
// setTimeoutPromosified(3000).then(callback)



function promiseCallBack(resolve){
    setTimeout(resolve, 3000);
}
promiseCallBack(function(){
    console.log("Rudra salokkhe")
})