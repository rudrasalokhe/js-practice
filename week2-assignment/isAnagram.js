function isANagram(str1,str2){
    const sortedString1 = str1.toLowerCase().split("").sort().join("");
    const sortedString2 = str2.toLowerCase().split("").sort().join("");
    if(sortedString1 == sortedString2){
        return true;
    }
    else{
        return false;
    }
}
var ans = isANagram("listen", "silent");
console.log(ans);