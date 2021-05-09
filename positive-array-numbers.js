/*
Coding challenge #12:
Create a function that receives an array of numbers
and returns an array containing only the positive numbers
 */
positiveArrays = (arr) => {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        var arrayElements = arr[i];
      if(arr[i] > 0) {
          newArr.push(arrayElements);
      }
    }
  return newArr;
};


let testArray = [-1,-2,-3,-5,0,-2,1,-4]; // Test array
let result = positiveArrays(testArray);
console.log(result);