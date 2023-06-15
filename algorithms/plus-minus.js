let array = [-4, 3, -9, 0, 4, 1]

function plusMinus(arr) {
    let positive = 0
    let negative = 0
    let zero = 0
    const length = arr.length

    for (let i = 0; i < arr.length;i++){
        if (arr[i] > 0) {
            positive++
        } else if (arr[i] < 0) {
            negative++
        } else {
            zero++
        }
    }

    const positiveRatio = Number(positive / length).toFixed(6)
    const negativeRatio = Number(negative / length).toFixed(6)
    const zeroRatio = Number(zero / length).toFixed(6)

    console.log(positiveRatio)
    console.log(negativeRatio)
    console.log(zeroRatio)
}

console.log(plusMinus(array));