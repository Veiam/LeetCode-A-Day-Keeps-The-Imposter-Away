function binarySearch(item, itemlist) {
    let listsize = itemlist.length - 1;
    let lowerIndex = 0;
    let upperIndex = listsize;

    while (lowerIndex <= upperIndex) {
        let half = Math.floor((upperIndex + lowerIndex) / 2);
        if (item == itemlist[half]) {
            return half;
        }
        if (item > itemlist[half]) {
            lowerIndex = half + 1;
        }
        else {
            upperIndex = half - 1;
        }
    }

    if (lowerIndex > upperIndex) {
        return null;
    }
}

let items = [6, 8, 19, 20, 23, 41, 49, 53, 56, 87];

console.log(binarySearch(20, items));
