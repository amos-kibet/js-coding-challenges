/*
Coding challenge #10:
Calculate the sum of numbers in an array of numbers
 */
var arr = [2, 3, -1, 5, 7, 9, 10, 15, 95]; // example array
var sum = 0;
for (var i = 0; i<arr.length; i++) {
    sum += arr[i];
}
console.log(sum);