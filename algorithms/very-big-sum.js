function aVeryBigSum(ar) {
    let sum = 0;
    for(let i = 0; i < ar.length; i++){
       sum += ar[i];
    }
    return sum;

    // A simple way
    // return ar.reduce((previous, current) => previous + current, 0);
}

const array = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]

console.log(aVeryBigSum(array));