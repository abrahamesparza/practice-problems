/*
Given an integer array nums,
rotate the array to the right
by k steps, where k is non-negative.

Example 1:
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]

Example 2:
Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
*/

//Solution 1:
var rotate = function(nums, k) {
    if (k % 2 !== 0) {
        k = k + 1;
        let rotated = nums.slice(0, k)
        nums = nums.slice(k);
        for (let num of rotated) {
        nums.push(num);
        }
        return nums;
    }
    else {
        let rotated = nums.slice(0, k)
        nums = nums.slice(k);
        for (let num of rotated) {
            nums.push(num);
        }
        return nums;
    }
};
// console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3)) // [5 ,6, 7, 1, 2, 3, 4]
// console.log(rotate([-1,-100,3,99], 2)) // [3, 99, -1, -100]

//Solution 2:
