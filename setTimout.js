/* write a function inAnagram  which take 2 parameters and returns  true/false  if those are anagrams or not. 
*/
function isAnagram(str1, str2){
    const sortedString1 = str1.sort();
    const sortedString2 = str2.sort();
    if(sortedString1==sortedString2){
        return true;
    }
    else{
        return false;
    }
}