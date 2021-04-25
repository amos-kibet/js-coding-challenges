/*
Hackernoon's coding challenges for beginners
Coding challenge #2: Print the odd numbers less than 100
 */
let oddNumbersGenerator = () => {
    for (var i = 0; i < 100000; i++) {
        if (i % 2 === 1) {
            console.log(i);
        }
    }
    //return i;
    //console.log(i);

};

var start = new Date().getTime(); // Start timer
oddNumbersGenerator();
var end = new Date().getTime(); // End timer
var time = end - start; // Compute execution time
console.log('Execution time: ' + time +' milliseconds');