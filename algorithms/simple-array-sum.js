let array = [1, 2, 3, 4]

function simpleArraySum(ar) {
    let sum = 0
    ar.forEach(element => {
        sum += element
    });
    return sum
}

console.log(simpleArraySum(array));