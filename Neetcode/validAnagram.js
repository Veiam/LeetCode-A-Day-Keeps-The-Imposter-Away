/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * Space Complexity: O(s)
 * Time Complexity: O(s+t)
 */
 var isAnagram = function(s, t) {
    if(s.length !== t.length)
        return false;
    
    const map = {};
    for(let char of s){
        if(!(char in map)){
            map[char] = 0;
        }
        map[char]++;
    }
    
    for(let char of t){
        if(char in map){
            map[char]--;
            if(map[char] === 0){
                delete(map[char]);
            }
        }
        else
            return false;
    }
    
    return Object.keys(map).length === 0;
};