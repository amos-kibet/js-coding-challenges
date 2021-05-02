/*
Coding challenge #7:
Calculate the sum of odd numbers greater than 10 and less than 30

Formula used: Arithmetic Progression formula
    s(n) = (n/2)((2a + (n-1)d)
    where s(n) - sum of the terms of the A.P. in question
             n - number of terms
             a - first form/term of the A.P.
             d - common difference
 */
var n = 0;
for (var i = 11; i<30; i++) {
    if (i%2 ===1) {
        n++;
    }
}

var a = 11;
var d = 2;

var result = (n/2)*((2*a + (n-1)*d));
console.log(result);