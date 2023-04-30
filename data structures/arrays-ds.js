/*
 * Complete the 'reverseArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

const array = [1, 2, 3, 4] // sample input

function reverseArray(arr) {
    let r = []

    for (let i = arr.length; i>0;) {
        i -= 1
        r[(arr.length - 1) - i] = arr[i]
    }

    return r
    
    // return arr.reverse() // A simple way
}

console.log(reverseArray(array)); // Output