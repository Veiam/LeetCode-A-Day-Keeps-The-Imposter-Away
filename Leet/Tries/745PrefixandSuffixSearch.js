// Design a special dictionary that searches the words in it by a prefix and a suffix.
// Implement the WordFilter class:
// WordFilter(string[] words) Initializes the object with the words in the dictionary.
// f(string pref, string suff) Returns the index of the word in the dictionary, which has the prefix pref and the suffix suff. If there is more than one valid index, return the largest of them. If there is no such word in the dictionary, return -1.

// Example 1:
// Input
// ["WordFilter", "f"]
// [[["apple"]], ["a", "e"]]
// Output
// [null, 0]
// Explanation
// WordFilter wordFilter = new WordFilter(["apple"]);
// wordFilter.f("a", "e"); // return 0, because the word at index 0 has prefix = "a" and suffix = "e".

// Constraints:
// 1 <= words.length <= 104
// 1 <= words[i].length <= 7
// 1 <= pref.length, suff.length <= 7
// words[i], pref and suff consist of lowercase English letters only.
// At most 104 calls will be made to the function f.
/**
 * @param {string[]} words
 */
var WordFilter = function (words) {
    this.pre = {};
    this.suf = {};
    this.count = 0;
    for (let word of words) {
        this.addP(word, this.pre);
        this.addP(word.split("").reverse().join(""), this.suf);
        this.count++;
    }
};

WordFilter.prototype.addP = function (word, trie) {
    for (let char of word) {
        if (trie[char] == null) {
            trie[char] = {};
            trie[char].words = [];
        }
        trie = trie[char];
        trie.words.push(this.count);
    }
    return trie;
}

WordFilter.prototype.search = function (fix, trie) {
    for (let char of fix) {
        if (trie[char]) {
            trie = trie[char];
        } else {
            return;
        }
    }
    return trie.words;
}
/** 
 * @param {string} pref 
 * @param {string} suff
 * @return {number}
 */
WordFilter.prototype.f = function (pref, suff) {
    let pre = this.search(pref, this.pre);
    let suf = this.search(suff.split("").reverse().join(""), this.suf);
    if (pre == null || suf == null) {
        return -1;
    }
    let l = pre.length - 1, r = suf.length - 1;
    while (l >= 0 && r >= 0) {
        const lVal = pre[l], rVal = suf[r];
        if (lVal === rVal) {
            return lVal;
        } else if (lVal < rVal) {
            r--;
        } else {
            l--;
        }
    }
    return -1;
};

/** 
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(pref,suff)
 */