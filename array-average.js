/*
Coding challenge #11:
Calculate the average of the numbers in an array of numbers
 */
arr = [2, 3, -1, 5, 7, 9, 10, 15, 95]; // example array
sum = 0;
arrayAverage = 0;
for (var i = 0; i<arr.length; i++) {
    sum += arr[i];
}
arrayAverage = sum / arr.length;

console.log(arrayAverage);