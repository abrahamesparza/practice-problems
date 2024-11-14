/*
Problem: Product of Array Except Self

Given an integer array nums, return an array answer such that answer[i]
is equal to the product of all the elements of nums except nums[i].

You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
*/

var productExceptSelf = function(nums) {
    let length = nums.length;
    let product = new Array(length);
  
    let leftItem = 1;
    for (let i = 0; i < length; i++) {
      product[i] = leftItem;
      leftItem *= nums[i];
    }
  
    let rightItem = 1;
    for (let i = length - 1; i >= 0; i--) {
      product[i] *= rightItem;
      rightItem *= nums[i];
    }
  
    return product;
};