/*
Given two strings s and t, return true if t is an 
anagram of s, and false otherwise.

Example 1:

Input: s = "anagram", t = "nagaram"

Output: true

Example 2:

Input: s = "rat", t = "car"

Output: false
*/

var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    
    // iterative solution
    // let sortedS = s.split('').sort().join('');
    // let sortedT = t.split('').sort().join('');
    // return true ? sortedS === sortedT : false;
  
    // map solution
    let sMap = new Map();
  
    for (let char of s) {
      sMap.set(char, (sMap.get(char) || 0) + 1);
    };
  
    for (let char of t) {
      if (!sMap.has(char)) {
        return false;
      }
      else {
        let count = sMap.get(char) - 1;
        if (count === 0) {
          sMap.delete(char);
        }
        else {
          sMap.set(char, count);
        }
      }
    };
  
    return sMap.size === 0;
  };
  
  let s = 'anagram';
  let t = 'nagaram';
  console.log(isAnagram(s, t));
  let s2 = 'rat';
  let t2 = 'car';
  console.log(isAnagram(s2, t2));