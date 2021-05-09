/*
Coding challenge #13:
Find the maximum number in an array of numbers
 */
bigNum = (arr) => {
    /*
    Linear search algorithm
    Steps: Start with number at arr[0] as the bigNum
           Compare with the next value, whichever is bigger becomes the current bigNum
           Iterate over the array while updating bigNum with the bigger number
           When at arr[arr.length-1], exit the loop & return the current bigNum
     */
    let bigNum = arr[0];
    let bigNumIndex = 0;
    // Loop starts at 1, assuming
    // bigNum has occupied index 0
    for (let i = 1; i < arr.length; i++) {
        if(bigNum < arr[i]) {
            bigNum = arr[i];
            bigNumIndex = i;
        }

    }
    console.log("Biggest number found at index: "+bigNumIndex);
    return "Biggest number: "+bigNum;
};
var arr = [1,2,3,4,5,6,7,80,9,10,20];
var result = bigNum(arr);
console.log(result);