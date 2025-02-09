function isLargest(numbers){
    let largestElement = numbers[0];
    for(let i =1;i<numbers.length;i++){
        if(numbers[i]>largestElement){
            largestElement = numbers[i];
        }
    }
    return largestElement;
}
let nums = [23,3454,77,889];
let ans = isLargest(nums);
console.log(`The laregest number is ${ans}`);