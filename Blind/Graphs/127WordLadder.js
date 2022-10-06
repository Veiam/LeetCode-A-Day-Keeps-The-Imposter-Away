// A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:
// Every adjacent pair of words differs by a single letter.
// Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
// sk == endWord
// Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.

// Example 1:
// Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
// Output: 5
// Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.

// Example 2:
// Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
// Output: 0
// Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.

// Constraints:
// 1 <= beginWord.length <= 10
// endWord.length == beginWord.length
// 1 <= wordList.length <= 5000
// wordList[i].length == beginWord.length
// beginWord, endWord, and wordList[i] consist of lowercase English letters.
// beginWord != endWord
// All the words in wordList are unique.

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 * Time and Space: O(m^2 * n), where M is the length of each word and N is the toal number of words in the input list
 * Can save space by storing indices instead of word
 */
var ladderLength = function (beginWord, endWord, wordList) {
    if (!wordList.includes(endWord)) {
        return 0;
    }
    wordList.push(beginWord);
    const wordLength = beginWord.length;

    const adjList = {}

    // build a map of adjacent list using pattern as a key and word as values
    for (let word of wordList) {
        for (let i = 0; i < wordLength; i++) {
            // make a wild card pattern
            const pattern = word.slice(0, i) + "*" + word.slice(i + 1);
            if (!(pattern in adjList)) {
                adjList[pattern] = [];
            }
            adjList[pattern].push(word);
        }
    }

    // keep track of visited word through bfs
    const visited = new Set([beginWord]);
    const queue = [beginWord];
    let res = 1;

    // bfs
    while (queue.length) {
        const len = queue.length;
        // go through current queue length
        for (let i = 0; i < len; i++) {
            const word = queue.shift();
            // we found an answer
            if (word === endWord) {
                return res;
            }
            // loop through to get current word's pattern
            for (let j = 0; j < wordLength; j++) {
                const pattern = word.slice(0, j) + "*" + word.slice(j + 1);
                // get its neighbors
                for (let neighbor of adjList[pattern]) {
                    // if we haven't visited
                    if (!(visited.has(neighbor))) {
                        // mark it and add to the queue
                        visited.add(neighbor);
                        queue.push(neighbor);
                    }
                }
            }
        }
        res++;
    }

    // can't reach the endWord from the beginWord
    return 0;
};

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 * Time and Space: O(m^2 * n), where M is the length of each word and N is the toal number of words in the input list
 * Bidirectional Breadth First Search
 */
var ladderLength = function (beginWord, endWord, wordList) {
    if (!wordList.includes(endWord)) {
        return 0;
    }
    wordList.push(beginWord);
    const wordLength = beginWord.length;

    const adjList = {}

    // build a map of adjacent list using pattern as a key and word as values
    for (let word of wordList) {
        for (let i = 0; i < wordLength; i++) {
            // make a wild card pattern
            const pattern = word.slice(0, i) + "*" + word.slice(i + 1);
            if (!(pattern in adjList)) {
                adjList[pattern] = [];
            }
            adjList[pattern].push(word);
        }
    }

    // keep track of visited word through bfs
    const startVisited = new Set([beginWord]);
    const endVisited = new Set([endWord]);
    const startQueue = [beginWord];
    const endQueue = [endWord];
    let startRes = 1;
    let endRes = 0;

    // bfs
    while (startQueue.length && endQueue.length) {
        let len = startQueue.length;
        // go through current queue length
        for (let i = 0; i < len; i++) {
            const word = startQueue.shift();
            // we found an answer
            if (endVisited.has(word)) {
                return startRes + endRes;
            }
            // loop through to get current word's pattern
            for (let j = 0; j < wordLength; j++) {
                const pattern = word.slice(0, j) + "*" + word.slice(j + 1);
                // get its neighbors
                for (let neighbor of adjList[pattern]) {
                    // if we haven't visited
                    if (!(startVisited.has(neighbor))) {
                        // mark it and add to the queue
                        startVisited.add(neighbor);
                        startQueue.push(neighbor);
                    }
                }
            }
        }
        startRes++;
        len = endQueue.length;
        // go through current queue length
        for (let i = 0; i < len; i++) {
            const word = endQueue.shift();
            // we found an answer
            if (startVisited.has(word)) {
                return startRes + endRes;
            }
            // loop through to get current word's pattern
            for (let j = 0; j < wordLength; j++) {
                const pattern = word.slice(0, j) + "*" + word.slice(j + 1);
                // get its neighbors
                for (let neighbor of adjList[pattern]) {
                    // if we haven't visited
                    if (!(endVisited.has(neighbor))) {
                        // mark it and add to the queue
                        endVisited.add(neighbor);
                        endQueue.push(neighbor);
                    }
                }
            }
        }
        endRes++;
    }

    // can't reach the endWord from the beginWord
    return 0;
};