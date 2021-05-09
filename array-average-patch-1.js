function averageArray(ar)
{
    var n = ar.length;
    var sum = 0;

    for(var i = 0; i < n; i++)
    {
        sum += ar[i];
    }

    return sum / n;
}

var ar = [2, 3, -1, 5, 7, 9, 10, 15, 95];
var avg = averageArray(ar);

console.log("Average: ", avg);