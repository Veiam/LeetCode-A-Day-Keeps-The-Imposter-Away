// Given a string, sort it based on the decreasing frequency of its characters.

const Heap = require('../../node_modules/collections/heap'); //http://www.collectionsjs.com
const sort_character_by_frequency = function (str) {
    // find the frequency of each character
    const freqMap = {};
    for (let char of str) {
        if (!(char in freqMap)) {
            freqMap[char] = 0;
        }
        freqMap[char]++;
    }

    // add all characters to the max heap
    const maxHeap = new Heap([], null, (a, b) => a[0] - b[0]);
    Object.keys(freqMap).forEach((char) => {
        maxHeap.push([freqMap[char], char]);
    });

    // build a string, appending the most occurring characters first
    let sorted = '';
    while (maxHeap.length > 0) {

        let [count, char] = maxHeap.pop();
        while (count > 0) {
            sorted += char;
            count--;
        }
    }
    return sorted;
};


console.log(`String after sorting characters by frequency: ${sort_character_by_frequency("Programming")}`)
console.log(`String after sorting characters by frequency: ${sort_character_by_frequency("abcbab")}`)
