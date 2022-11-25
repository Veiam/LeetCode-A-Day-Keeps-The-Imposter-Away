// Given a string and a number ‘K’, find if the string can be rearranged such that the same characters are at least ‘K’ distance apart from each other.

const Heap = require('../../node_modules/collections/heap');
const reorganize_string = function (str, k) {
    const freqMap = {};
    for (let char of str) {
        if (!(char in freqMap))
            freqMap[char] = 0;
        freqMap[char]++;
    }

    const maxHeap = new Heap([], null, (a, b) => a[0] - b[0]);
    // add all characters to the max heap
    Object.keys(freqMap).forEach((char) => {
        maxHeap.push([freqMap[char], char]);
    });

    let result = "";
    while (maxHeap.length > k - 1) {
        const deque = [];
        for (let i = 0; i < k; i++) {
            deque.push(maxHeap.pop());
        }
        const freq = deque[k - 1][0];
        let part = "";
        for (let i = 0; i < k; i++) {
            part += deque[i][1];
        }
        result += part.repeat(freq);
        for (let i = 0; i < k - 1; i++) {
            deque[i][0] -= freq;
            if (deque[i][0] > 0) {
                maxHeap.push(deque[i]);
            }
        }
    }
    const lastChar = result[result.length - 1];
    while (maxHeap.length > 0) {
        const [freq, char] = maxHeap.pop();
        if (freq > 1 || char == lastChar) {
            return "";
        }
        result += char;
    }
    return result;
};


console.log(`Reorganized string: ${reorganize_string('mmpp', 2)}`);
console.log(`Reorganized string: ${reorganize_string('Programming', 3)}`);
console.log(`Reorganized string: ${reorganize_string('aab', 2)}`);
console.log(`Reorganized string: ${reorganize_string('aapa', 3)}`);

const Heap = require('../../node_modules/collections/heap'); //http://www.collectionsjs.com
const Deque = require('../../node_modules/collections/deque'); //http://www.collectionsjs.com

function reorganize_string(str, k) {
    if (k <= 1) {
        return str;
    }

    charFrequencyMap = {};
    for (i = 0; i < str.length; i++) {
        const chr = str[i];
        if (!(chr in charFrequencyMap)) {
            charFrequencyMap[chr] = 1;
        } else {
            charFrequencyMap[chr]++;
        }
    }


    const maxHeap = new Heap([], null, ((a, b) => a[0] - b[0]));
    // add all characters to the max heap
    Object.keys(charFrequencyMap).forEach((char) => {
        maxHeap.push([charFrequencyMap[char], char]);
    });

    const queue = new Deque();
    const resultString = [];
    while (maxHeap.length > 0) {
        let [frequency, char] = maxHeap.pop();
        // append the current character to the result string and decrement its count
        resultString.push(char);
        // decrement the frequency and append to the queue
        queue.push([char, frequency - 1]);
        if (queue.length === k) {
            [char, frequency] = queue.shift();
            if (frequency > 0) {
                maxHeap.push([frequency, char]);
            }
        }
    }

    // if we were successful in appending all the characters to the result string, return it
    if (resultString.length === str.length) {
        return resultString.join('');
    }
    return '';
}
