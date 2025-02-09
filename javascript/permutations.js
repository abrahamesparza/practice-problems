/*
LeetCode Problem #46

Given an array nums of distinct integers,
return all the possible permutations.

You can return the answer in any order.

Example 1:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
Example 2:

Input: nums = [0,1]
Output: [[0,1],[1,0]]
Example 3:

Input: nums = [1]
Output: [[1]]
*/

const permutations = (nums) => {
    if (!nums.length) return nums;
    if (nums.length === 1) return [nums];
  
    let possiblePermus = [];
  
    for (let i = 0; i < nums.length; i++) {
      let current = nums[i];
      let remainder = nums.slice(0, i).concat(nums.slice(i + 1));
      let permutated = permutations(remainder);
      
      for (let j = 0; j < permutated.length; j++) {
        let permutedArr = [current].concat(permutated[j])
        possiblePermus.push(permutedArr);
      }
    }
    return possiblePermus;
  };
  
  console.log(permutations([1, 2, 3]))
  console.log(permutations([0, 1]))
  console.log(permutations([1]))
  console.log(permutations([]))