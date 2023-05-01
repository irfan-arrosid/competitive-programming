let alice = [17, 28, 30],
    bob = [99, 16, 8]

function compareTriplets(a, b) {
    let aliceScore = 0,
        bobScore = 0

    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            aliceScore += 1
        } else if (a[i] < b[i]) {
            bobScore += 1
        }
    }

    return [aliceScore, bobScore]
}

console.log(compareTriplets(alice, bob));