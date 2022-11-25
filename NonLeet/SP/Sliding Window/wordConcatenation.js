// Given a string and a list of words, find all the starting indices of substrings in
// the given string that are a concatenation of all the given words exactly once without
// any overlapping of words. It is given that all words are of the same length.
const find_word_concatenation = function (str, words) {
    const result_indices = [], wordsFreq = [], wordLength = words[0].length;
    const totalLength = wordLength * words.length;
    let startIndex = 0, matched = 0;
    // Keep the frequency of every word in a HashMap.
    for (let word of words) {
        if (!(word in wordsFreq)) {
            wordsFreq[word] = 0;
        }
        wordsFreq[word]++;
    }
    // Starting from every index in the string, try to match all the words.
    for (let endIndex = 0; endIndex <= str.length - wordLength; endIndex += wordLength) {
        const rightWord = str.substring(endIndex, endIndex + wordLength);
        if (rightWord in wordsFreq) {
            // In each iteration, keep track of all the words that we have already seen in another HashMap.
            wordsFreq[rightWord]--;
            if (wordsFreq[rightWord] == 0) {
                matched++;
            }
        }
        // Store the index if we have found all the words.
        if (matched == Object.keys(wordsFreq).length) {
            result_indices.push(endIndex - totalLength + wordLength)
        }
        if (endIndex - startIndex + wordLength >= totalLength) {
            const leftWord = str.substring(startIndex, startIndex + wordLength);
            console.log(leftWord);
            if (leftWord in wordsFreq) {
                wordsFreq[leftWord]++;
                if (wordsFreq[leftWord] == 1) {
                    matched--;
                }
            }
            startIndex += wordLength;
        }
    }
    return result_indices;
};

function find_word_concatenation(str, words) {
    if (words.length === 0 || words[0].length === 0) {
        return [];
    }

    wordFrequency = {};

    words.forEach((word) => {
        if (!(word in wordFrequency)) {
            wordFrequency[word] = 0;
        }
        wordFrequency[word] += 1;
    });

    const resultIndices = [],
        wordsCount = words.length;
    wordLength = words[0].length;

    for (i = 0; i < (str.length - wordsCount * wordLength) + 1; i++) {
        const wordsSeen = {};
        for (j = 0; j < wordsCount; j++) {
            next_word_index = i + j * wordLength;
            // Get the next word from the string
            word = str.substring(next_word_index, next_word_index + wordLength);
            if (!(word in wordFrequency)) { // Break if we don't need this word
                break;
            }

            // Add the word to the 'wordsSeen' map
            if (!(word in wordsSeen)) {
                wordsSeen[word] = 0;
            }
            wordsSeen[word] += 1;


            // no need to process further if the word has higher frequency than required
            if (wordsSeen[word] > (wordFrequency[word] || 0)) {
                break;
            }

            if (j + 1 === wordsCount) { // Store index if we have found all the words
                resultIndices.push(i);
            }
        }
    }

    return resultIndices;
}


console.log(find_word_concatenation('catfoxcat', ['cat', 'fox']));
console.log(find_word_concatenation('catcatfoxfox', ['cat', 'fox']));