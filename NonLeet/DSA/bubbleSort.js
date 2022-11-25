function bubbleSort(dataset) {
    let k = dataset.length;
    for (let i = 0; i < dataset.length; i++) {
        for (let j = 0; j < k; j++) {
            if (dataset[j + 1] < dataset[j]) {
                let temp = dataset[j + 1];
                dataset[j + 1] = dataset[j];
                dataset[j] = temp;
            }
        }
        k--;
    }
}

let main = function () {
    list1 = [6, 20, 8, 19, 56, 23, 87, 41, 49, 53];
    bubbleSort(list1);
    console.log(`Result: ${list1}`);
}

main();