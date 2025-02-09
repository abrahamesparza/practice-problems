/*
You are given a 0-indexed integer array nums.
A pair of indices (i, j) is a bad pair if
i < j and j - i != nums[j] - nums[i].

Return the total number of bad pairs in nums.

Example 1:

Input: nums = [4,1,3,3]
Output: 5
Explanation: The pair (0, 1) is a bad pair since 1 - 0 != 1 - 4.
The pair (0, 2) is a bad pair since 2 - 0 != 3 - 4, 2 != -1.
The pair (0, 3) is a bad pair since 3 - 0 != 3 - 4, 3 != -1.
The pair (1, 2) is a bad pair since 2 - 1 != 3 - 1, 1 != 2.
The pair (2, 3) is a bad pair since 3 - 2 != 3 - 3, 1 != 0.
There are a total of 5 bad pairs, so we return 5.
*/

// Optimized O(n) solution using a hashmap
var countBadPairs = function(nums) {
    let len = nums.length;
    let totalPairs = (len * (len - 1)) / 2;
    let goodPairs = 0;
    let pairsMap = new Map();
  
    for (let i = 0; i < len; i++) {
      let key = nums[i] - i;
      if (pairsMap.has(key)) {
        goodPairs += pairsMap.get(key);
      }
      pairsMap.set(key, (pairsMap.get(key) || 0) + 1);
    }
    return totalPairs - goodPairs;
};

console.log(countBadPairs([4, 1, 3, 3]));


// Nested for loop solution O(n²) (not ideal)
/*
const countBadPairs = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      let indiceValue = j - i;
      let elementValue = nums[j] - nums[i];
      if (i < j && indiceValue != elementValue) {
          badPairsCount += 1;
      }
    }
  }
  return badPairsCount;
}
*/
