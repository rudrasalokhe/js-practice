function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
function div(a,b){
    return a/b;
}
function doOperation(a,b,op){
    let val = op(a,b);
    return val;
}
const ans = doOperation(2,3,add);
console.log(ans);
