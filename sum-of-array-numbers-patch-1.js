/*
Coding challenge #10:
Calculate the sum of numbers in an array of numbers
 */
arraySum = (arr) =>{
    var sum = 0;
    for (var i = 0; i<arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};

var arr = [2, 3, -1, 5, 7, 9, 10, 15, 95];
var sum = arraySum(arr);
console.log(sum);
