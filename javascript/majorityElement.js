/*--------------
LEET CODE CHALLENGE (easy)
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times.
You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
--------------*/

/*------------*/
//Dissecting the problem:
/*
I: an array of numbers
O: the element in the array that appears
    more than (nums.length / 2)
C: if length of array is 1 return the number in the array



//Approach:
//i want to solve this by storing each number in the array
//as the key in a dictionary, and the count of appearances as the value
//then i want to iterate through that dictionary, and use the value to 
//check which key appears more times than the threshold
//and return that key
/*------------*/

var majorityElement = function (nums) {
    let n = nums.length;
    if (n === 1) return nums[0];

    let numsMap = new Map();
    for (let num of nums) {
      if (!numsMap.has(num)) {
        numsMap.set(num, 0)
      }
      numsMap.set(num, (numsMap.get(num)) + 1)
    }
    
    let threshold = n / 2;
    for (let [key, value] of numsMap.entries()) {
      if (value < threshold) {
        continue;
      }
      else {
        return key;
      }
    }
  };