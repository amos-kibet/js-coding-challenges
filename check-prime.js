/*
Coding challenge #16:
Create a function that will return a Boolean specifying if a number is prime
 */
checkPrime = (num) => {
    if (num === 1) {
        return false;
    } else if (num === 2) {
        return true;
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }

};
let checker = checkPrime(9);
console.log(checker);