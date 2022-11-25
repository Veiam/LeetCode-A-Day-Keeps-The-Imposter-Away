function findMax(items) {
    console.log(items);
    if (items.length == 1) {
        return items[0];
    }
    let first = items[0];
    let second = findMax(items.splice(1));
    if (first > second) {
        return first;
    }
    else {
        return second;
    }
}

let items = [6, 8, 19, 20, 23, 41, 49, 53, 56, 87];

console.log(findMax(items));