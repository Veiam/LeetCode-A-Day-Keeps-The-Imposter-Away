function count(items) {
    let hash = {}, i = 0;
    for (let item of items) {
        if (item in hash) {
            hash[item] += 1;
        }
        else {
            hash[item] = 1;
        }
    }

    console.log(hash);
}

let items = ["apple", "pear", "orange", "banana", "apple",
    "orange", "apple", "pear", "banana", "orange",
    "apple", "kiwi", "pear", "apple", "orange"];

count(items);