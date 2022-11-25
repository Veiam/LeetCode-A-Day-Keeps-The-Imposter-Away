function mergeSort(array) {
    if (array.length < 2) {
        return array
    }
    const half = array.length / 2

    const left = array.splice(0, half)
    return merge(mergeSort(left), mergeSort(array))
}

function merge(left, right) {
    let arr = []

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }
    return [...arr, ...left, ...right]
}
let items = [6, 20, 8, 19, 54, 23, 87, 41, 49, 53];

console.log(mergeSort(items));