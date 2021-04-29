/*
Coding challenge #4:
Print all the multiplication tables with numbers from 1 to 10
Uses recursion
 */
for(var i = 1; i <= 10; i++) {
    printTable(i);
    console.log("");
}

function printTable(n){
    for(var i = 1; i <= 10; i++) {
        var row = n + " * " + i + " = " + n * i;
        printTable(row);
    }
}