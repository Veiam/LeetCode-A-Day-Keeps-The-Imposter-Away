let sorted = [1, 2, 3, 4, 5], unsorted = [1, 3, 2, 5, 4];

function isSorted(list) {
    let i = 0;
    while (i < list.length) {
        let j = i + 1;
        if (list[i] > list[j]) {
            return false;
        }
        i++;
    }
    return true;
}

sorted.reduce((n, item) => n !== false && item >= n && item);
sorted.every((v, i, a) => !i || a[i - 1] < - v);
